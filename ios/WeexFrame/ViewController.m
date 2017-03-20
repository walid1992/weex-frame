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
    [_instance renderWithURL:self.url options:@{@"bundleUrl":[self.url absoluteString]} data:nil];
    // 加载本地
    //    NSString *url = [NSString stringWithFormat:@"file://%@/index.js",[NSBundle mainBundle].bundlePath];
    //    [_instance renderWithURL:[NSURL URLWithString:url] options:@{@"bundleUrl":url} data:nil];
}

- (UIStatusBarStyle)preferredStatusBarStyle{
    return UIStatusBarStyleLightContent;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
