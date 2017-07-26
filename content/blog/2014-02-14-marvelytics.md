---
title: MARVELytics – playing with the Marvel API
author: Sally
type: post
date: 2014-02-14T20:39:28+00:00
url: /blog/2014/02/14/marvelytics/
categories:
  - Pet projects
tags:
  - analytics
  - comics
  - data
  - hack
  - marvel

---
A couple of weeks ago I was very excited to find out that [Marvel had released an API][1], exposing some of their data. Unfortunately I wasn’t able to have a play with it then as I was headed out to dinner (apparently dropping your other half to play with code isn’t acceptable), and a couple of busy weeks meant that I had to put it to one side for a bit. I came back to it this week during my lunch break, getting the basic connection set up and caching the data, and then was able to work with the data set and play around with the visuals on subsequent train journeys and lunch breaks, finishing today. The result was MARVELytics &#8211; some basic analytics around character-based data. [You can view it here][2].

### The API

Grabbing data itself is really quite simple. There’s some pretty good documentation up on the website, and I didn’t come across anything which caused me to trip up badly.

The maximum number of items returned per request is 100, and as the data set I was working with (Characters) had over 1000 items, that meant multiple requests to capture all of the information.

As this was a lot of data and meant some pretty hefty response/processing time, it obviously needed caching. I’ve currently got a pretty high TTL on this &#8211; a week &#8211; which is based on the fact that this data simply won’t change substantially over that time. (It won’t change substantially after a week either unless someone gets some new extended runs, but hey).

The data I wanted was specifically around seeing who were the most popular characters for the different breakdowns of categories, specifically individual comics, stories, series, and events. It was pretty much just a case of splitting out what I needed, sorting, and presenting it.

### Visuals

My design skills are famously limited to basic colours and flipping through Google Fonts, so not that much is going on visually. Having started out by displaying the top 10s for each category, as much as I love lists, I wanted to try something else out. Each set of data had a lot more than 10 items, and I wanted to explore whether some kind of visualisation could be used to better effect.

Having previously had a very quick mess around with the [d3 library][3], I thought I’d have another go with it, this time using the ‘[pack][4]’ option rather than ‘force’. Pack allows you to create bubble charts, which I thought could look quite cool. The chart is an SVG element that gets created dynamically based on the data provided.

One of the challenges with this was that the data is very specific, and that particular variants are listed explicitly &#8211; for example we have data stating that there are 2576 Spider-Man comics, and 1 for Spider-Man (Marvel Zombies). I’m also personally not sure that collectives such as ‘X-Men’ and ‘Avengers’ should sit alongside ‘Wolverine’ and ‘Hulk&#8217; in a ‘Characters’ data set, but that’s Marvel’s call. The differences in values causes a challenge with visual proportionality, especially on smaller screens. Labels give context, but in the bubble chart I chose to limit them, removing text once bubbles shrank below a certain size. It is however still possible to get the data for a bubble by hovering over it, or there is currently a nice dirty javascript alert in place for touch/click (just in case you were questioning if I was secretly a designer). I’m considering making this nicer, so for now it’s a todo.

When shrinking the chart down to a small screen size it ended up losing the labels altogether (none of the bubbles were big enough based on the rules I’d set), and it just looked like I’d plonked a rather odd pattern in for no particular reason. I therefore decided to limit the number of nodes on smaller screens, adding more as the screen real estate increases. The limit of this is 847, which is the most I could get d3 to add without it falling over and not loading anything. I’m not sure whether this is some kind of performance thing, or whether it’s actually based on something in the data, so I’ll keep an eye on this as time goes on.

At the moment the chart doesn’t listen for changes to the window size and re-draw itself, meaning that if you shrink your screen down hoping for some sexy reflow you’re not going to get it at the moment. Again, todo. I&#8217;d quite like to put in other visualisations for the rest of the lists, but wanted to sort out the core things that need to be tidied up first.

<p class="contentc">
  <img alt="MARVELytics screenshot" src="http://recordssoundthesame.com/wp-content/uploads/2014/02/MARVELytics-l.jpg" />
</p>

View the live version here: [MARVELytics][5]

### Future explorations

As well as the things that clearly need improving, Richard from Ostmodern (who I&#8217;m working with at the moment) suggested that I create a magnification-based interaction which causes the nodes to grow in size when you move your finger/pointer over them. This would allow nodes that are smaller to become more easily read. This is something that I might look at in general if I play around with d3 any more.

I&#8217;ve also considered making some kind of predictive search element, where you can type in the start of a character name and it would change the colour of the matching nodes/flag up the relevant values. This would be nice to tie up all of the different variants of the characters (for example the Spider-Man examples mentioned previously), and to let people find their favourites easily.

In general I&#8217;ve had some other ideas for messing around with the API, one of which, in a surprise deviation from my normal tendencies, could actually be useful! I&#8217;m going to save this up either for lunchtimes in my next contract, or for the time that I&#8217;ve booked out after my current contract ends, where I&#8217;m intending to write two talks and write another thing, and get to know some new technologies a bit better. And play video games.

 [1]: http://developer.marvel.com "Marvel API"
 [2]: http://recordssoundthesame.com/labs/marvelytics "MARVELytics"
 [3]: http://d3js.org/
 [4]: https://github.com/mbostock/d3/wiki/Pack-Layout
 [5]: http://recordssoundthesame.com/labs/marvelytics