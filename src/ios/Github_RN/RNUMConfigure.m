
#import "RNUMConfigure.h"
#import <UMShare/UMShare.h>
#import "Constants.h"
#import <UMCommonLog/UMCommonLogHeaders.h>

@implementation RNUMConfigure

+ (void)initWithAppkey:(NSString *)appkey channel:(NSString *)channel
{
  //             ，        
  [UMCommonLogManager setUpUMCommonLogManager];
  
  SEL sel = NSSelectorFromString(@"setWraperType:wrapperVersion:");
  if ([UMConfigure respondsToSelector:sel]) {
    [UMConfigure performSelector:sel withObject:@"react-native" withObject:@"1.0"];
  }
  [UMConfigure initWithAppkey:appkey channel:channel];
  
  //      U-Share     
  
  // U-Share     
  [self configUSharePlatforms];
  [self confitUShareSettings];
  
}

+ (void)confitUShareSettings
{
  /*
   *       
   */
  //[UMSocialGlobal shareInstance].isUsingWaterMark = YES;
  
  /*
   *       https，   http    ，    info.plist      
   <key>NSAppTransportSecurity</key>
   <dict>
   <key>NSAllowsArbitraryLoads</key>
   <true/>
   </dict>
   */
  [UMSocialGlobal shareInstance].isUsingHttpsWhenShareContent = NO;
  
}

+(void)configUSharePlatforms
{
  //     appKey appSecret
  [[UMSocialManager defaultManager] setPlaform:UMSocialPlatformType_WechatSession appKey:AppKey_WX appSecret:AppSecret_WX redirectURL:@"http://mobile.umeng.com/social"];
  
  
  //     QQ   appKey appSecret
  [[UMSocialManager defaultManager] setPlaform:UMSocialPlatformType_QQ appKey:AppKey_QQ  appSecret:AppSecret_QQ redirectURL:@"http://mobile.umeng.com/social"];
  
  //     appKey appSecret
  [[UMSocialManager defaultManager] setPlaform:UMSocialPlatformType_Sina appKey:AppKey_WB  appSecret:AppSecret_WB redirectURL:@"http://sns.whalecloud.com/sina2/callback"];
}

@end

