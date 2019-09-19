---
title: Exploring Web Monetization 💸
author: Sally
type: post
date: 2019-09-18T18:00:00+00:00
url: /blog/2019/09/18/exploring-web-monetization/
description: "It's not often that I hear about an emerging web standard and I find my mind wandering back to it over the next few days, but Web Monetization has done just that. In this post I'll go through what it is, and why I think it's particularly interesting."
class: bi-1
categories:
  - tools
headerimg: '/img/content/blog/20190918-hdr.jpg'
---

<p class="lede">It's not often that I hear about an emerging web standard and I find my mind wandering back to it over the next few days, but Web Monetization has done just that. In this post I'll go through what it is, and why I think it's particularly interesting.</p>

Last weekend I was speaking at State of the Browser, where the always delightful (and impeccably dressed) [Bruce Lawson](https://www.brucelawson.co.uk/) was on before me. As ever Bruce gave us a great talk, but it was the last section about his recent consultancy work that really got my brain ticking over. He'd been doing some work with a company called [Coil](https://coil.com), who are backing the creation of a new web standard around a JavaScript API which allows the creation of a payment stream from the user agent to a website: [Web Monetization](https://webmonetization.org/).

Years ago now, I worked on the redevelopment of the Fulham FC website. At the time, the UX team of the web agency I worked at proposed the pretty bold suggestion that the football club should remove any advertising from their site that wasn't required contractually. It was judged that the improved user experience would actually be overall more beneficial than the income from the third party ads, and it got implemented. At the time we got quite a bit of press for this. 

Not everyone has the luxury of being quite so brave, and many content creators around the web rely on advertising as a business model. Even modest returns can make a difference to someone (particularly considering how the relative value of currency can vary globally), and ads on sites have become extremely commonplace. Of course, they're not without issues. Performance, privacy abuses, unethical targetting, adblockers, and of course the fact that actual _content_ is reduced to a tiny fraction of the page are topics that have been debated long and hard.

Web Monetization comes from a place that believes there should be an open W3C standard, adopted by browser vendors, which facilitates content creators to get paid in other ways. This is a mission I can get on board with.

## What is Web Monetization?

The idea is that I, as a content creator, can place a small snippet of code (in the form of a meta tag) onto my site. This contains a "payment pointer" which is a reference to an online wallet. I did that last night, and it looks like this:

<img src="/img/content/blog/20190918-meta.jpg" alt="A screengrab of the meta tag, with name monetization" />

Site visitors (hi!) come to read content. Because this standard is in its infancy you're most likely not using [Puma](https://www.pumabrowser.com/), or one of the [browser extensions](https://help.coil.com/en/articles/2701494-supported-devices-browsers) that supports the proposed standard, but if you were, and if you'd subscribed to a service like Coil (which gathers subscription money to share with the content creators), then I'd be streamed money for the time that you spend reading this. So. Maybe. I'll. Add. Some. More. Words. 😉

The choice of subscribing to a wallet service would be your choice, but if you visited as a subscriber my site could reward you with some exclusive content or feature if it detected that monetization was active. Right now it doesn't, all you'd get is a fuzzy feeling in your heart, but it _could_.

Whilst I've mentioned specific companies above, the most exciting aspect of this is that everyone is working towards an open standard. That would mean that you'd be able to use competing services for your sending and receiving wallets, and all manner of browsers. 

ℹ️ *If you want to know more about the proposed tech specs for the standard you can find an explainer [here](https://github.com/adrianhopebailie/web-monetization/blob/master/explainer.md) or the spcification is at [Interledger RFC 28](https://interledger.org/rfcs/0028-web-monetization/)*

## I think this is super interesting

I love that this is a model that could give people income options that aren't advertising. I love that it's another example of the web competing with monetised platforms like native app stores. I love that it is designed with privacy in mind (my site wouldn't know anything about the visitors, short of whether they were paying or not). And I really, really love that it's got some great people on board already. 

Despite working in fintech now (😬) I've never really had an interest in the 'fin', and it's always been more about the 'tech'. Ordinarily, one company starting something new in the finance space wouldn't catch my eye too much, but what I found _really_ interesting was that Coil have brought **Mozilla** and **Creative Commons** on board to help spread the word through [Grant For the Web](https://foundation.mozilla.org/en/blog/100-million-investment-reshape-economics-web/). These are two organisations that I hugely admire, and I'm particularly interested to see how their involvement plays out. 


## It's still early days

I found it particularly interesting how in some replies to tweets people were already poking holes in potential implementations. This is great! I'm no stranger to working on standards hoping to change behaviour ([OpenActive](https://openactive.io)), and one thing I've learnt is that these conversations at early stages are incredibly valuable to helping shape the future. Discussing implementation details like loopholes and exploits, blacklisting and retracting payments will all be really important, as will getting more partners on board to help diversify the ecosystem.

I'm also interested in some of the more human aspects around this. Coil applies a flat monthly subscription fee no matter how much you browse, but it's not yet clear to me whether this model would be adopted by others. Page dwell time doesn't always equal the same amount of content consumption, and I'd hope to see more discussion about considerations for people using assistive technologies, or to ensure that people who generally read more slowly won't be at a disadvantage and essentially have their wallets run down faster than others.

So like I said, I've added it to this blog. I'm not expecting to make my millions; for me it's more about testing directly, learning more, and contributing in a small way to adoption. But I'm very much looking forward to finding out more, and seeing how the standard grows into the future. 

On top of the links I've included above, you may also want to read:

* CSS Tricks [removing ads for supporters](https://css-tricks.com/site-monetization-with-coil-and-removing-ads-for-supporters/)
* Coil post about their [Mozilla/Creative Commons team-up](https://coil.com/p/coil/Coil-Mozilla-and-Creative-Commons-Launch-100-Million-Grant-for-the-Web-to-Advance-Web-Monetization-f/Bdp8Hgcf4)
* Coil [Developer Docs](https://coil.com/docs/)
* NPM Package [react-web-monetization](https://www.npmjs.com/package/react-web-monetization)


