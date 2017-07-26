---
title: Weather – a weekend hack
author: Sally
type: post
date: 2013-08-31T16:25:23+00:00
url: /blog/2013/08/31/weather-a-weekend-hack/
categories:
  - Pet projects
tags:
  - development
  - hack
  - personal
  - weather

---
Today I have been left to fend for myself whilst my other half is out doing virtuous deeds for others, and having spent the last week off in rural Norfolk doing everything but be on the internet, I wanted to spend some time putting together another quick hack to engage my brain before returning to work.

I always carry a notebook with me in my bag no matter where I&#8217;m going, and I use it to write down all the germs of ideas which could some day make it into something resembling an end-result. Today was the turn of something I&#8217;ve been thinking about for a while &#8211; just a simple page to display the weather. What&#8217;s new about that, I hear you ask? Well, nothing really, but like most personal projects it was created out of a need to tailor it to some very niche personal requirements.

I&#8217;m commuting into London at the moment, getting up at 6am, and religiously checking Google Now every day &#8211; firstly for &#8216;weather in Colchester&#8217;, and then &#8216;weather in London&#8217;. Only then can I move on to sleepily stumbling around, and attempting to dress myself in something appropriate to the day&#8217;s climate. The two places aren&#8217;t crazily far apart, but I&#8217;ve been caught out several times by it being a beautiful day in Colchester, only for it to be chucking it down when I get off the train, or vice versa. I feel the cold very easily, and being caught out without a jacket or hoodie makes for a very grumpy Sally. Once I&#8217;ve done my search, I flick through the timeline of the day to see what it looks like for the key times I&#8217;m going to be out and about. It&#8217;s not a lengthy process, but it could be simplified. So I made my own.

## The result

You can see the final version here: <a title="Weather hack" href="http://sallyjenkinson.co.uk/labs/weather/" target="_blank">http://sallyjenkinson.co.uk/labs/weather/</a>

The result was a responsive one-pager, with either 5 or 6 weather blocks (depending on the flow, layout-wise) showing the weather in Colchester and London at different times of the day. The 6th wasn&#8217;t actually needed, but I put it in at certain display widths as the gap being there didn&#8217;t look great, and I thought I might as well display something rather than putting in a blank square. Data comes from the <a title="forecast.io" href="http://forecast.io/" target="_blank">forecast.io API</a>, which allows 1000 free requests daily. As this is a small personal project that should be more than enough for me, but there is a paid version if you&#8217;re interested. All sorts of data is returned, which is one of the attractions of why I picked that particular API rather than others (other reasons being the sensible JSON it returns, the decent amount of free requests, and the documentation. It also has a nice dashboard to track API usage.), and the page could easily be extended to show more data. Except that wasn&#8217;t what it was about, and I deliberately wanted something simple.

For the weather icons I just used a simple icon font from from <a title="Meteocons" href="http://www.alessioatzeni.com/meteocons/" target="_blank">Meteocons</a>. The icons are freely available as web fonts, desktop fonts, and images for both commercial and personal use. I haven&#8217;t customised them at all as they did the job (and my efforts would likely end up looking&#8230; less good&#8230;).

I&#8217;m quite pleased with the end result. As with previous hacks the intention was to do something quickly, get it online, and to give myself boundaries for what I wanted to achieve. I&#8217;ll be using it from Monday, so may end up introducing some tweaks depending on how it matches up to the &#8216;real&#8217; weather. In a happy coincidence it&#8217;s been a gorgeous day here, and it was a lovely excuse to spend some time outside.

<img style="max-width: 100%;" alt="Working outside" src="http://recordssoundthesame.com/wp-content/uploads/2013/08/IMAG3317-700x394.jpg" />

## Future improvements

I do actually have some ideas for extending this in a different way, which could be quite interesting, but would be a much bigger piece of work. It&#8217;s likely to never come to fruition, but it&#8217;s back in the notebook for now.

At present the location coordinates are hardcoded to be the latitude and longitude of my home area and Liverpool Street in London. I could easily swap this out to be geolocated instead (and already have some geolocation work which could be transplanted very quickly), but I just felt it wasn&#8217;t needed. As I have a specific use-case for this, I wanted to keep the code as clean and simple as possible.

The API has seemed a bit slow at times during testing. I could put in some caching, although again, due to the fact that I&#8217;ll likely be using it once a day and will be the only user (although anyone else commuting to London from Colchester is welcome to use it!), this probably isn&#8217;t necessary and would again introduce some bloat. I&#8217;ll monitor this, and also the reliability of the data it&#8217;s sending me, and consider whether to switch to another service in the future.