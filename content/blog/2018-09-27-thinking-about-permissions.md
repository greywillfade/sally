---
title: Thinking about permissions on the web
author: Sally
type: post
date: 2018-09-27T14:00:00+00:00
url: /blog/2018/09/27/thinking-about-permissions/
description: A collection of musings on the topic of web permissions, and the kind of questions that we should be asking for the future.
class: bi-1
categories:
  - learning
headerimg: '/img/content/blog/20180927-hdr.jpg'
---

The other day I saw a call on social media from the lovely [Jo Franchetti](https://twitter.com/ThisIsJoFrank/status/1044179130122731520), asking for people’s views on web **permissions** to take into a W3C workshop. 

This is a subject that I think is really important. It’s a wonderful melting pot of technical aspects meeting user experience; of developer experience and browser capabilities merging with website creators’ visions.

The web gaining ever-more functionality and exciting possibilities is something that benefits both the people that make it, and the people that use it. However, greater interactivity can potentially lead to more invasive experiences, so it’s absolutely right that we continue to talk about the control around this.

I sent Jo a long, pretty unstructured email of my thoughts but decided that the key content may be of use to others as a blog post. Much of the following is questions that need discussion rather than me providing answers, and many are personal views rather than being backed up with evidence. Hopefully this can spark thoughts by other people, so that we can improve capabilities for everyone.

But first, what exactly are we talking about?

## What do we mean by ‘permissions’?
Here's a very quick demo where I've combined examples from the [Notification](https://developer.mozilla.org/en-US/docs/Web/API/notification) and [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation) examples over at MDN.

<p data-height="265" data-theme-id="dark" data-slug-hash="KGPqra" data-default-tab="html,result" data-user="greywillfade" data-pen-title="Permissions demo" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/greywillfade/pen/KGPqra/">Permissions demo</a> by Sally (<a href="https://codepen.io/greywillfade">@greywillfade</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

If you click on each of the buttons, unless you’ve previously given or revoked permission for the CodePen domain you should be shown a little dialogue asking for permission to do each action. How this looks will vary slightly depending on the browser that you’re using. If for any reason it doesn’t work well, we’ll come on to that a bit later.

These permissions give you, the user, control over when and how a website can potentially do something a little bit more sensitive. They get invoked before actions like triggering geolocation and notifications (as we can see in the demo), through to a range of others including the ability for sites to access your camera, microphone, or even (in the right browser) the [ambient light readings](https://www.youtube.com/watch?v=YGG5E-69_2k).

How important is this? Well, that’s down to you to decide, and this gives you the ability to do so. Perhaps you’re absolutely fine with giving access to everything without question. Alternatively may be the kind of person that doesn’t want _any_ information that could be used to [personally identify you](https://www.w3.org/TR/permissions/#privacy-considerations) collected, or more likely you’re somewhere in the middle. By making it clear what’s being requested and when, permissions give the **user some control**.

In practice, this requires a collaboration between the browser and the website developer. The developer is able to call APIs, which if supported may trigger an interaction element within the browser. They may also be able to query what’s been granted or denied, and revoke access programatically. Browsers can also provide visual cues about the permissions that you’ve given, and allow you to manage those through settings menus. They may also invoke a permissions dialogue automatically because of certain situations, or criteria that are met.

<figure>
<img src="/img/content/blog/20180927-ffperm.jpg" alt="Some of the Firefox permission controls" />
<figcaption>Some of the Firefox permission controls</figcaption>
</figure>

This topic can easily spiral off into individual discussions around things like privacy, individual web APIs, and lots of dark patterns, but for the rest of this post I’m just going to focus on the permission aspect, and some key questions around how we can make them work well for everyone. Whilst I’m going to use examples of what we can currently do and how these work, I also want to think about this through the lens of future functionality - the questions I pose are as much about how things could work in the future as they are about the realities of today.

## The ‘what’s and ‘how’s of permissions
In order to do permissions well, I think there are two key areas to think about - *what’s* actually being requested, and *how* it’s being requested. 

Is a site being intrusive with *what* they can potentially learn about me (say, wanting my precise location when it’s unnecessary)? Or is it being intrusive in terms of *how* they interact with me (popping up a lot of notifications and preventing me from quickly completing my intended task)? If one of those angles doesn’t work well, then regardless of whether the other is acceptable to someone, they’re likely to start opting out and harbouring negative feelings.

### How 
Let’s start by thinking about *how* permissions are given,  denied, revoked, or updated.

A really key consideration here is around the degree of **user activity vs passivity**. I remember using an example of a site inappropriately requesting geolocation in a talk I did back in 2014 (a topic that many others were also covering - I wasn’t saying anything new or groundbreaking). The site immediately sprung a geolocation permission request on the homepage, before the visitor had done anything. I bet you can think of examples too, and we’re still discussing these issues many years on. Does this matter? Again, ultimately you decide, but an interaction like this means that either someone is agreeing to data collection with extremely little context, or just declines (potentially missing out on some useful functionality). By attempting to collect this information at the wrong time, when someone's pretty passive in their engagement, we’re not serving people as well as we could.

I’d love to see some research and insight into whether developers are genuinely thinking about the user experience around some of these browser interactions when they consider their implementations, or…not. I’d really like to know more about whether poor examples are as a result of people not knowing any better, them deliberately trying to be pushy or manipulative, or if there are other good reasons. Could those people be better supported (a collection of good practice implementation patterns for instance?). It’s worth pointing out that there are some recommendations out there already - for instance Google checks for geolocation on page load as part of its [Lighthouse audit](https://developers.google.com/web/tools/lighthouse/audits/geolocation-on-load), and provides [guidance](https://developers.google.com/web/fundamentals/native-hardware/user-location/#ask_permission_responsibly) on the subject. However as different permissions vary, I’d really like to see more on this, to help understand how developers could be better supported to create better things.

#### Let’s talk about notifications

I think that notifications are particularly crucial to the permission discussion, because to an extent they’re fundamental to it: permissions *are* often currently notifications. I personally know there’s a big difference between browser-based notification (e.g. requesting access to camera) and site notifications (“you’ve got a message! would you like to subscribe to new news forever?!”). I think that this is true for most people within the web creator bubble, but again I wonder whether there’s general _pop-up fatigue_ in play for the masses, and whether this impacts on modal-based interactions around permissions (as opposed to them being baked more into the browser chrome itself, etc).

As so many others have pointed out, we’re living in a golden age of all kinds of popup bullshit, stolen screen real-estate, but also notification fatigue more generally. I’ve certainly been guilty of just getting rid of anything that’s popped up, and have actually dismissed things that are useful - from permissions requests through to phone notifications (there’s a reason I have the Android Notification Log as a shortcut on my home screen!). Add to Home Screen I think will be another important discussion here as that becomes more accepted and understood.

<figure>
<img src="/img/content/blog/20180927-brad.jpg" alt="Side by side views of Brad Frost's Death to Bullshit" />
<figcaption>Side by side views of Brad Frost's <a href="http://deathtobullshit.com">Death to Bullshit</a> site</figcaption>
</figure>

#### Thinking about implementation

Implementation-wise, I have quite a lot of questions. It would be interesting to further explore areas including:

1 - The **relationship between more passive user activities** (e.g. loading a page), **more active ones** (e.g. explicit button presses), **the resulting permissions**, and **responsibilities**. At the time of writing, many API requests can be triggered by whatever we like, so long as the functionality is supported by the browser. Other things, like Add to Home Screen can be fired by the browser itself when a set of (differing) criteria are met. Where we can check for browser _support_, should there also be checks built in for the _appropriateness_ of being able to make calls, or is this adding too much control and complexity around something which really needs better implementation guidelines? Is it more hassle and going to cause more problems than it’s actually worth?

2 - The balance between **individual permissions and the ability to batch them up** - specifically if a website or piece of functionality requires a lot of access to work. My gut is that a lot of this is about effective presentation, and that it’s irresponsible to encourage people to accept all X forever without question, but actually that they may want to deny all X forever.
 
3 - **Permissions in different contexts** *for a lay person*, including how much they understand/what their expectations are around things like:

* The permission request interface (initial request/response method to grant/deny permission)
* How to amend a specific permission (say if I accidentally choose the wrong option and immediately want to amend, vs intentionally select something and later want to).
* How to see what permissions I have set at both a specific website, and browser level.

I’m generally unsure of how much non-web people tend to delve into browser settings, or would consider changing something within the browser chrome that affects the site that they’re engaging with; whether to change notifications they’d look to go into an on-site settings menu rather than understand it’s tied into their browser. I suspect that not many would, but I don’t know how much research has been done into this area.

Remember earlier when I said that we'll come back to if your demo didn't work? Well, right now I can't get notifications to trigger for this demo in Chrome. I can use the same example on the MDN site, and I've explicitly allowed permissions for notifications for both CodePen and globally for Chrome, yet it's still judged to be disallowed. I've obviously turned something off which I haven't found again. The lesson is that with different layers in play, things can get confusing, even for those who (should!) know what they're doing.

4 - For developers, whether a **greater level of customisability** around the permissions workflow would be good or bad - i.e. where to draw the line on sites being able to control permissions functionality such as triggers, or visuals (style permissions UI controls with greater flexibility). What’s important to them, and like I said before, why may they have implemented things that go against best practice in the first place? What do they need to be better supported?

5 - **How much consistency is actually needed** across different APIs or pieces of functionality, and permissions as a common element with these. In general I personally think that greater consistency across different APIs is a good thing, but I think that research on the points above is really important to challenge my assumption.

6 - Finally, I think there’s really great conversations to be had around **variable permissions** in the same way that we’re hearing about [JavaScript being limited](https://www.androidpolice.com/2018/08/23/chrome-android-may-start-disabling-javascript-2g-connections/) under certain conditions. Are there situations where someone may give permission for something, but then situationally have that revoked? How does that get communicated and controlled? 

### What
And finally, we come onto the ‘what’s of permissions. These focus on _what_ we’re giving people access to. As mentioned previously it will differ between individuals as to what they feel comfortable sharing, but I included a few examples in my email to highlight some additional considerations.

Using a few different areas that currently ask for permission: 

**Geolocation** - I tend to only ever activate this for very specific, contained tasks. Searching on a map for things nearby - I’ll activate it for a search but I don’t want them to have it afterwards. Likewise posting a photo or social status - I may want it on to tag that I’m at a particular place for one photo but not the next; I am happy to share I’m at the Colosseum, or a particular restaurant whilst posting a photo of their food, but don’t want it broadcasting my home location. It’s dependent on factors including the network I’m sharing it with, whether it’s stored by the originating app, and how long it persists. It’s also strongly *context based* rather than something that I want to assign on a page or site basis, or even being task based.

**Notifications** - I think these get a lot of flak, and sure, I almost never accept them, but this ties into my query around better supporting implementers. I think people’s poor use of technology is hurting something that’s genuinely useful, and I don’t want it to go away through blanket bans. From email notifications, to stupid side projects that remind people which bin day it it, I think these definitely have a place _but_ should be opt in on a secondary level, not thrust upon you immediately. Over the years we’ve seen pop-up blockers, and are now seeing things like Firefox’s [No More Notifications (If You Want)](https://blog.mozilla.org/firefox/no-notifications/). Whilst this is in itself a form of permission control, I think we need to be careful not to drive certain features out of existence because of poor implementation leading to blanket blocks. 

**Midi, clipboard, media devices** - These are all examples of permissions that feel very task-specific to me. I feel like these are examples of things that could have more boundaries about how and when they’re able to be invoked so as to minimise any nefarious use.

These are just a few, but they highlight that _my_ personal preference is generally to continue as normal, and then to use whatever’s being requested as an **enhancement**, as a natural part of whatever task I am hoping to do, at a time that makes sense to me rather than having it pushed on me out of context or at a time that doesn’t make sense. I personally may or may not choose to accept based on things like whether:
 
* it will enhance my interaction, make it more delightful, intuitive, or useful.
* the data being used is persistently collected, or just used temporarily.
* my permission has longer ramifications for my relationship with the site - e.g. the shouty _“HI WOULD YOU LIKE NOTIFICATIONS ABOUT NEW NEWS STORIES?!”_ when I’ve just opened a blog post I’ve seen on Twitter is an auto-no.
* I have confidence that the permission I am granting is appropriate for the action, and that I’m clear in how it will be used.

For me there’s this disconnect again - as web people we usually know what all of these things are when we’re making our decisions as users around whether to deny or approve permissions on sites we visit, but I wonder whether the browser/site builders could be better supporting people to understand more about what they’re asking for, why, and what it means for them? Many browser vendors include links to content, but I’d love to hear more about what the mass market understands, whether this content (or permissions generally) matter to them, and what information they’d find useful to have from an implementation perspective - why is _this_ website wanting to know _that_?

## Permissions are complicated
I’m just one person with specific thoughts. I’m also a person where the decline of my relationship with Facebook can be directly attributed to them getting grabby with permissions over Messenger, with them trying to force you to download it even though the features didn’t need any native app functionality, and removing the ability to send messages through the web. I didn’t like that. I now have no Facebook on a mobile device, and have never installed Messenger. So I’m aware that I bear grudges when this stuff goes wrong, or when it doesn’t align with my worldview! However, the majority of the population _didn’t_ do that.

That to me shows that people may not necessarily care. That if the product is something that they want they’ll use it whatever (but also that I don’t know enough about this to be certain). However, even if this is the case, and if people make decisions based on the path of least resistance, or weighing up what’s more important to them, I still think that we as creators *should* be thinking about the public, to make sure that they’re protected and using things well. That’s why I think that some of the above areas are interesting to explore now, and to explore into the future as our devices and browser capabilities evolve even further.

**P.S.**
If you’re interested in further reading on this topic, Jo previously wrote a really good blog post which covers some of her thinking: [A Crisis of Permissions – Samsung Internet Developers – Medium](https://medium.com/samsung-internet-dev/a-crisis-of-permissions-80cf3b2c802e)


 



