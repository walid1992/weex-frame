//
//  ViewController.m
//  HackerNews
//
//  Created by Hanks on 16/12/8.
//  Copyright © 2016年 Weex. All rights reserved.
//

#import "ViewController.h"

#import <WeexSDK/WeexSDK.h>

@interface ViewController ()


@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) UIView *weexView;
@property (nonatomic, assign) CGFloat weexHeight;

@end

@implementation ViewController


- (void)viewDidLoad
{
    [super viewDidLoad];
    
    // [_instance fireGlobalEvent:@"" params:@{}];
    // Do any additional setup after loading the view, typically from a nib.
    // walid update 高度适配问题
    // _weexHeight = self.view.frame.size.height - 20;
    _weexHeight = self.view.frame.size.height;

    [self.navigationController.navigationBar setHidden:YES];
    
    [UIApplication sharedApplication].statusBarStyle = UIStatusBarStyleLightContent;
    
    UIView *statusBar = [[[UIApplication sharedApplication] valueForKey:@"statusBarWindow"] valueForKey:@"statusBar"];
    if ([statusBar respondsToSelector:@selector(setBackgroundColor:)]) {
        statusBar.backgroundColor = [UIColor colorWithRed:1.00 green:0.40 blue:0.00 alpha:1.0];
    }
    [self render];
}

- (void)dealloc
{
    [_instance destroyInstance];
}

- (void)render
{
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    CGFloat width = self.view.frame.size.width;
    // walid update 高度适配问题
    // _instance.frame = CGRectMake(self.view.frame.size.width-width, 20, width, _weexHeight);
    _instance.frame = CGRectMake(self.view.frame.size.width-width, 0, width, _weexHeight);
    
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:weakSelf.weexView];
        UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, weakSelf.weexView);
        
        UIButton *button = [UIButton buttonWithType:UIButtonTypeRoundedRect];
        [button setTitle:@"刷新" forState:UIControlStateNormal];
        [button sizeToFit];
        button.frame = CGRectMake(320, 500, 50, 50);
        [button addTarget:weakSelf action:@selector(render) forControlEvents:UIControlEventTouchUpInside];
        [weakSelf.view addSubview:button];
    };
    _instance.onFailed = ^(NSError *error) {
        NSLog(@"failed %@",error);
    };
    
    _instance.renderFinish = ^(UIView *view) {
        NSLog(@"render finish");
    };
    
    _instance.updateFinish = ^(UIView *view) {
        NSLog(@"update Finish");
    };
    
    // 加载serve
    NSLog(@"url %@",self.url);
    //[_instance renderWithURL:self.url options:@{@"bundleUrl":[self.url absoluteString]} data:nil];
    
    NSURL *URL = [self testURL: [self.url absoluteString]];
    NSString *randomURL = [NSString stringWithFormat:@"%@%@random=%d",URL.absoluteString,URL.query?@"&":@"?",arc4random()];
    [_instance renderWithURL:[NSURL URLWithString:randomURL] options:@{@"bundleUrl":URL.absoluteString} data:nil];
}

#pragma mark - load local device bundle
- (NSURL*)testURL:(NSString*)url
{
    NSRange range = [url rangeOfString:@"_wx_tpl"];
    if (range.location != NSNotFound) {
        NSString *tmp = [url substringFromIndex:range.location];
        NSUInteger start = [tmp rangeOfString:@"="].location;
        NSUInteger end = [tmp rangeOfString:@"&"].location;
        ++start;
        if (end == NSNotFound) {
            end = [tmp length] - start;
        }
        else {
            end = end - start;
        }
        NSRange subRange;
        subRange.location = start;
        subRange.length = end;
        url = [tmp substringWithRange:subRange];
    }
    return [NSURL URLWithString:url];
}


- (UIStatusBarStyle)preferredStatusBarStyle{
    return UIStatusBarStyleLightContent;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
