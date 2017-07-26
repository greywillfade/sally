---
title: Mindmapping with Javascript
author: Sally
type: post
date: 2014-01-18T18:38:55+00:00
url: /blog/2014/01/18/mindmapping-with-javascript/
categories:
  - Pet projects
tags:
  - conference
  - ideas
  - mindmap
  - speaking

---
I&#8217;ve recently started thinking about a new talk I&#8217;m going to be doing later this year, and since it&#8217;s quite a short one I&#8217;ve got lots of ideas but need to settle on the strongest themes. When it comes to putting together a structure I tend to be quite visual, and usually end up covering the walls of my home office with a sea of post-its, as well as sketching out assorted diagrams in notebooks. As much as I love lists in general, I don&#8217;t like them for brainstorming &#8211; they give my thoughts too much of a linear structure which doesn&#8217;t work for me.

As I was sketching a mind map the other day, I fast reached the edges of the paper. I also had lots of floating ideas around the edge which didn&#8217;t seem to fit into the structure yet, but I&#8217;d probably end up scribbling them out and adding them in later, which highlighted another problem &#8211; if you radically change your structure you have to re-do the whole thing.

I thought about firing up Omnigraffle and making something, but from experience with my huge [starting points diagram][1] I know that it&#8217;s very easy to get tied up in the details when using &#8216;proper&#8217; software, and it all becomes a bit boring. I wanted something lightweight that I could play with, but which didn&#8217;t look _utterly_ ugly.

Having played around with a few online tools, it&#8217;s clear that there are an awful lot of them out there. Here&#8217;s a <a title="Mashable - Mindmapping tools" href="http://mashable.com/2013/09/25/mind-mapping-tools/" target="_blank">post by Mashable</a> which has quite a few. <a title="Coggle" href="https://coggle.it" target="_blank">Coggle</a> in particular was one I liked due to its simplicity and clean design, but it was far too buggy and I kept losing branches. The more I looked, the more I wondered how easy it would be just to make something simple.

## My attempt

I spent about half an hour on a lunch break looking at data visualisation libraries, and settled on D3 because it had some similar examples, and seemed to be very simple in its implementation. It just uses HTML, Javascript, and CSS, and an SVG element is created which contains elements relating to nodes and links. Data is held in a very simple JSON structure. I added text labels, and made each node draggable so that if any label isn&#8217;t visible you can drag the nodes around. Nodes can either be standalone (for my floating ideas), or can be put into a hierarchy which can be used for styling.

I then spent an hour on the train on the way home messing around with the presentation and trying to think how I wanted it to work in terms of the hierarchy. Should the nodes themselves be smaller on the periphery, or should the links get thinner, or both? What kind of spacing and animation works? I&#8217;m still not exactly happy with the styling, but it&#8217;s a start.

I&#8217;m not sure whether this is actually a feasible tool for me in the long run. In particular data in the JSON file has associations between links and nodes based on their index, which is the default behaviour. There is no option to assign IDs or references and for it to just work, so I&#8217;d need to do some extra work to get this working. What it means however is that I will likely end up with a bit of a messy structure, and may have to keep re-referencing items if I change their order. It&#8217;s obviously going to have some limitations in terms of the labels too, but I guess I&#8217;ll only start to find out how well it does as I come up with more ideas for the talk, so that&#8217;s an incentive too.

Anyway, if you&#8217;re curious, the work in progress is in the Labs section, and you can see it here: [Mindmap][2].

&nbsp;

 [1]: http://recordssoundthesame.com/startingpoints/ "Starting points"
 [2]: http://recordssoundthesame.com/labs/mindmap/ "Mindmap"