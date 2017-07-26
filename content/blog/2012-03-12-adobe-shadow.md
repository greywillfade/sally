---
title: Adobe Shadow
author: Sally
type: post
date: 2012-03-12T15:17:40+00:00
url: /blog/2012/03/12/adobe-shadow/
categories:
  - Adobe
tags:
  - mobile
  - software

---
Developers hate inefficiencies. We hate repetitive tasks. We hate having to re-type something we&#8217;ve not 30 seconds ago typed in on a different device, especially considering we&#8217;re likely surrounded by about 10 of the damn things. This is why I love Adobe Shadow.

Adobe Shadow is a new inspection and preview tool which aims to remove some of the common pains of the present day development workflow. Mobile is a given for new projects nowadays, and since it&#8217;s preferable to view output on real devices rather than emulators it&#8217;s easy to end up in a situation where time and patience is wasted on frequently refreshing a sea of devices littering your desk.

The concept behind Shadow is that of device pairing and synchronised browsing. Once devices have been paired, whatever is being viewed on the desktop is reflected across all devices which have the client application open, saving many, many refreshes. This includes switching tabs, and works across localhost, intranet, and internet sites.

Not only is this an excellent time saving tool, but arguably more useful is the built-in ability to debug each device using the master device. Opening the Chrome extension shows a list of all paired devices, each with &#8220;<>&#8221; next to their name. Clicking on this allows remote debugging of the devices, including the ability to make changes on the fly, computed styles, layout highlighting, and all of the main features that you&#8217;d expect. This element isn&#8217;t without its problems, and I&#8217;m intermittently seeing <a href="http://forums.adobe.com/thread/972705" target="_blank">this issue</a> regardless of the sites I visit, but for a Labs release it&#8217;s a strong tool.

Bugs aside there are obviously certain limitations that users should be aware of &#8211; each device needs to be on the same network, each will be using its own session, and anything requiring user input will not be replicated across all devices.

The setup process will take you a matter of minutes, and goes something like this:

1) Download Shadow from Adobe Labs (for Mac or PC) &#8211;<a href="http://labs.adobe.com/downloads/shadow.html" target="_blank">http://labs.adobe.com/downloads/shadow.html</a>

2) Download iOS and/or Android client apps. For bonus &#8216;efficiency&#8217; (lazy) points, push the app download to your multiple devices from the web version. iOS &#8211;<a href="http://www.adobe.com/go/sd_ios_app" target="_blank">http://www.adobe.com/go/sd_ios_app</a> Android &#8211;<a href="http://www.adobe.com/go/sd_android_app" target="_blank">http://www.adobe.com/go/sd_android_app</a>

3) Download the Google Chrome browser extension &#8211;<a href="http://www.adobe.com/go/sd_chrome_app" target="_blank">http://www.adobe.com/go/sd_chrome_app</a>

4) Load up Shadow on your desktop, and open the clients on your devices.

5) On each device a Connections screen should pop up. If not, bring it up using the branched icon.

6) Select the master device running the PC/Mac helper application, and you&#8217;ll be given a passcode.

7) Open Chrome, and you&#8217;ll see that the Shadow icon has a little plus symbol. Click it to view the devices requesting pair permission.

8) Enter the passcode for each device. Done!

For more information, including an installation guide and a video demonstation go here: <a href="http://labs.adobe.com/technologies/shadow/" target="_blank">http://labs.adobe.com/technologies/shadow/</a>

Shadow is a very promising tool, and one that I can see being a central part of my development workflow and the output from the studio at work. As &#8220;mobile first&#8221; principles and a mobile perspective are applied by default to an ever increasing amount of projects I&#8217;m excited to see more tools spring up which will be able to streamline what we do.