---
title: Farewell, Tea Tracker
author: Sally
type: post
date: 2016-01-05T15:16:49+00:00
url: /blog/2016/01/05/farewell-tea-tracker/
headerimg: '/img/content/blog/20160105-header.jpg'
categories:
  - Pet projects

---
<p class="lede">
  Throughout 2015 I did quite a few talks on data, or more specifically the concept of <a href="http://recordssoundthesame.com/blog/2015/10/24/an-introduction-to-open-data/">open data</a>. During this time I was continuing to undertake a data project of my own &#8211; something that I had habitually woven into my daily routines &#8211; the act of logging all of my tea drinking using a side project called Tea Tracker that I made at the end of 2013.
</p>

My [original post][1] on the subject explained the background of the project and how it was built. At its core, the tracker consisted of a database and a set of basic services which hooked up the public dashboard, a private PhoneGap wrapped HTML app for Android, and a private Chrome extension. At that point I had ideas for expanding the tracker, or to build in extra features. In early 2015 I attended Seb’s <a href="http://seb.ly/st4i-stuff-that-talks-to-the-interwebs/" target="_blank">ST4I course</a> and contemplated hooking up a thermal printer to plot a visual record, or making a reminder system, but all of these fell flat. The core of this project was always the data itself rather than gimmicks, and the basic system that I’d started off with was really all I needed.

## Why did I stop tracking?

Whenever I mentioned the tracker to anyone they would usually follow a pattern: laugh, realise I was serious, tell me how sad I was, then admit it was quite interesting, and usually end on suggesting something to make it better. I became used to this over time, and when I mentioned shutting it down to friends several of them told me I should keep it going. I&#8217;d got used to little knowing nods whenever I picked up a new brew and immediately got my phone out of my pocket, and part of me was tempted to carry on. I fact, if you look at the dates, I did lose my resolve and did carry on for a while beyond the two year dataset that I&#8217;d intended.

However it needed to stop. I wasn&#8217;t going to do any more with it, the back-end wasn&#8217;t built to be scalable enough, and really the only benefit would have been opening up the data to others&#8230; but that again would have required a more secure and rebuilt set of services if it was to stay dynamic. This year I have decided to focus my efforts in a much more considered way, and whilst the effort of tea tracking in itself wasn&#8217;t arduous, the guilt from not doing more with the project was.

Looking back over the data has shown me some quite interesting patterns, including the fact that there are clear correlations between the types of tea that I drink and what I&#8217;m doing in my life, as well as that I apparently drink less and less tea as the days of the week go on. My jasmine drinking habit is of no surprise, but the fact that I only drink 12 teas per week on average was considerably lower than I&#8217;d expected. It&#8217;s all interesting stuff (to me!), but I think that two years is enough of a sample size, and that I can be happy with the amount that I have collected.

## Be free, data!

As such, I have ripped out all of the AngularJS and database-driven elements, made a static resting place for the project, and have decided to release the data under a Creative Commons attribution licence, which I may well just make public domain. Why? Why not. The research that I did for my talk showed me that there is some amazing, weird and wonderful data <a href="https://github.com/caesar0301/awesome-public-datasets" target="_blank">out there already</a>, and the one thing that you can be sure of is that you can never predict all of the data people want to work with. If mine is useful to someone, then great. If not then at least I have put the project to bed and can spend my brain power on other things.

You can find the summary page and download links at the usual location: <a href="http://recordssoundthesame.com/labs/teatracker" target="_blank">recordssoundthesame.com/labs/teatracker</a>, or please get in touch if you&#8217;d like to discuss this or anything else further.

 [1]: http://recordssoundthesame.com/blog/2014/04/15/introducing-tea-tracker/
