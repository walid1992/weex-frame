# gradle run dev

THIS_DIR=$(dirname "$0")
pushd "$THIS_DIR"

./gradlew assembleDebug

adb install -r app/build/outputs/apk/app-debug.apk

popd