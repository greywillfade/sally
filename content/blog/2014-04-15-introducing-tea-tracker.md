---
title: Introducing Tea Tracker
author: Sally
type: post
date: 2014-04-15T15:43:41+00:00
url: /blog/2014/04/15/introducing-tea-tracker/
categories:
  - Pet projects
tags:
  - analytics
  - data
  - hack
  - tea

---
Yes folks, it&#8217;s that time again. Every now and again I get the urge to make something (usually pretty pointless), and the latest in this series of wonderful distractions is Tea Tracker.

This was actually born way back, in November last year. At the time I was hopping around on trains a lot, and it started as yet another way of keeping my brain from melting by doing something semi-productive. For quite some time I&#8217;d been meaning to create a project to keep track of my tea drinking, because it&#8217;s the kind of amazingly nerdy thing that fascinates me. As something that I do day in, day out, I was interested to see what rate I was actually consuming tea at, what trends I could spot, and whether there were any fluctuations. I&#8217;m a riot at parties, I tell you.

## Starting out

Initially, as with most things I make, the idea was just to get something done and finished quickly. If it&#8217;s too complex, it won&#8217;t happen. As such I put together a very simple MySQL database structure, and created a PHP function to handle the interaction for adding a record of a drink. This was called via AJAX from a little web page that I wrapped with PhoneGap so that it would sit on my phone&#8217;s home screen with a pretty icon, because otherwise I would forget it. Naturally, it looked appalling. I didn&#8217;t mind at first, as it was more important that I started training myself to capture the data. I&#8217;m pretty good at forming habits; I&#8217;m still stuck using Foursquare. Eventually though, when you&#8217;re using something regularly, ugliness starts to grate so the input mechanism went through a couple of rounds of improvements. I also eventually created a very basic report page, pretty much so that I could easily check that my tea capture had actually been stored accurately and it wasn&#8217;t giving me a false positive.

Since the start, I&#8217;ve been religiously collecting data, minus a few where I&#8217;ve forgotten or haven&#8217;t been able to track. I love it when companies share their data though (hello <a title="data.gov.uk" href="http://data.gov.uk/" target="_blank">data.gov.uk</a>), so naturally the next step was to allow you all to check in on my tea habits. If you&#8217;re ever wondering whether I&#8217;ve had my daily fix, or whether I&#8217;m more partial to jasmine or green today, you can now monitor me at <a title="Tea Tracker" href="http://recordssoundthesame.com/labs/teatracker/" target="_blank">my Tea Tracker dashboard</a>.

(Please note that this is buggy as hell in older browsers and Firefox &#8211; I am aware and will be fixing. Bear with my Flexboxing)

<img class="alignnone size-full wp-image-757" alt="Tea Tracker Dashboard" src="http://recordssoundthesame.com/wp-content/uploads/2014/04/teatracker-shot.png" srcset="http://recordssoundthesame.com/wp-content/uploads/2014/04/teatracker-shot.png 1024w, http://recordssoundthesame.com/wp-content/uploads/2014/04/teatracker-shot-250x267.png 250w, http://recordssoundthesame.com/wp-content/uploads/2014/04/teatracker-shot-700x747.png 700w, http://recordssoundthesame.com/wp-content/uploads/2014/04/teatracker-shot-120x128.png 120w" sizes="(max-width: 1024px) 100vw, 1024px" />

## The dashboard

Update: I later added All Time Tea &#8211; something I&#8217;d had in an earlier version of my app, but which I&#8217;d left off the dashboard for some reason.

<img src="http://recordssoundthesame.com/wp-content/uploads/2014/04/20140609teatracker.jpg" alt="Tea Tracker dashboard" class="alignnone size-full wp-image-845" srcset="http://recordssoundthesame.com/wp-content/uploads/2014/04/20140609teatracker.jpg 556w, http://recordssoundthesame.com/wp-content/uploads/2014/04/20140609teatracker-250x495.jpg 250w, http://recordssoundthesame.com/wp-content/uploads/2014/04/20140609teatracker-120x237.jpg 120w" sizes="(max-width: 556px) 100vw, 556px" />

I&#8217;ve been doing some things that have involved AngularJS recently, and whilst my knowledge of it is extremely basic at this point (having built simple routing and CRUD-based systems only), I wanted to see if I could do something a bit more custom. What I&#8217;ve ended up with still feels extremely messy and certain bits need splitting out and refactoring, but it was a good learning experience. For the chart, I used Highcharts. I&#8217;d used these before for a bit of work I did for Fulham FC, and having considered Google Charts and a couple of others, these felt the nicest to work with. They&#8217;re pretty customisable, and once I&#8217;d got my head around how they plug into Angular it was pretty plain sailing to hook it all up. The general layout uses Flexbox, which helped deal with the fact that the boxes may vary wildly in height depending on how thirsty I&#8217;ve been that week.

## Insights!

As it stands, the data is pretty good stuff. I finished a long contract working in London recently, and have (hooray!) been able to work from home since then. You can clearly see the drop off though &#8211; I apparently drink a LOT more tea when I&#8217;m in an office environment. I also drink an awful lot of jasmine tea. The water was odd in my old office in Tunbridge Wells, and because I could never seem to make a nice cup of &#8216;normal&#8217; tea, I got out of the habit. Jasmine became my go to tea of choice, and now I go through boxes of the stuff. When I&#8217;m working at home however, I have a stash of matcha (powdered green) tea, and I drink a lot more of that &#8211; as evidenced by the spike in March.

## Improvements

Apart from general code improvements and outstanding todos, there are several things that I&#8217;ll eventually get around to doing. This week I was in rural France, with extremely intermittent connectivity, which led to me keeping a list of when I&#8217;d had teas and manually inputting them when I got back. I really need to make some offline/syncing functionality instead, although as it only bugs me when I go abroad I don&#8217;t get annoyed enough on a daily basis to make it a priority.

I **really** need to put some caching in.

I&#8217;ve already had a request for his own instance from my friend <a title="Paul Swain" href="http://iwearglasses.net" target="_blank">Paul</a>, with his angle on it being:

> We could have a tea-off! the winner buys whiskey/rum after responsive conference.

I&#8217;ll be setting it up for him shortly, and it&#8217;s a good opportunity for me to extend the functionality properly, maybe making a login rather than being lazy and hardcoding user IDs. I&#8217;ll amend the dashboard so that he can check his stats, and would like to make the ability to see a direct comparison&#8230; although this all feels rather optimistic. As mentioned previously, the original infrastructure was very much a quick &#8216;get something in place&#8217; kind of thing and is extremely flimsy and insecure, so I&#8217;d like to gradually update each component to make it more robust.

Finally, I&#8217;d like to make the graph mechanism a bit more responsive &#8211; at the moment it simply shrinks, but isn&#8217;t necessarily the best way to display information in a visual way at small screen sizes. I&#8217;m playing with a few ideas and may try a few out.

**Update (7th June 2014)** &#8211; I&#8217;ve made myself a Chrome extension, using the same code as my PhoneGap app, for when I&#8217;m working and can&#8217;t be bothered to pick up my phone. This was a combination of exactly the same stuff as the phone version, plus a simple manifest file and a few icons for Chrome to use in various places. It works in exactly the same way. I already had most of this from my Final Countdown Chrome extension.

 <img src="http://recordssoundthesame.com/wp-content/uploads/2014/04/chromeext.jpg" alt="Tea Tracker Chrome extension" class="alignnone size-full wp-image-844" srcset="http://recordssoundthesame.com/wp-content/uploads/2014/04/chromeext.jpg 367w, http://recordssoundthesame.com/wp-content/uploads/2014/04/chromeext-250x477.jpg 250w, http://recordssoundthesame.com/wp-content/uploads/2014/04/chromeext-120x229.jpg 120w" sizes="(max-width: 367px) 100vw, 367px" />

So, <a title="Tea Tracker" href="http://recordssoundthesame.com/labs/teatracker" target="_blank">check it out</a>, and if you&#8217;d be so kind as to <a title="sjenkinson on Twitter" href="http://twitter.com/sjenkinson" target="_blank">tweet at me</a> to put the kettle on if my consumption falls below worrying levels that would be great.