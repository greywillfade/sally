---
title: Speaking the same language
author: Sally
type: post
date: 2015-05-12T20:04:49+00:00
url: /blog/2015/05/12/speaking-the-same-language/
categories:
  - Pet projects

---
In March this year I started a new transformation project working in the utilities sector for a rather large and well-known company. This has been very different for me in that it&#8217;s not strictly a digital project &#8211; digital is one small aspect, and I&#8217;m working as a specialist consultant to help to merge the worlds of systems and customer/staff experiences, but the transformation, architecture, and systems involved go way beyond just the web &#8211; spanning all sorts that I (sadly!) definitely can&#8217;t talk about at the moment. It&#8217;s huge, and is exciting because of its potential to change the whole business.

Working with people who have often spent over 10 years within their respective companies and the industry, it became apparent very fast that I&#8217;d need to get up to speed on the terminology. This was a mix of utilities sector lingo, Oracle terminology and shorthand, and the usual abbreviations that people who have worked together a long time sink into. In the first week or so I often felt like many were speaking a totally different language, but this worked two ways, and I have also been asked to explain terms that I use frequently across typical projects, and had no idea that they weren&#8217;t as ubiquitous in the industry as I&#8217;d thought.

I took to questioning every acronym that I came across, as some of the commonly-used ones had meanings that differed from my understanding. SME? _Small and Medium sized Enterprises_, surely? Not on this project &#8211; it means _Subject Matter Experts_. After a few too many &#8220;_oh, sorry, I should know that, I&#8217;ve asked that before_&#8221; moments, and with spending three days a week living in isolated hotels, there was only one thing for it &#8211; build an acronym companion!

## Acronym Helping Hand (AHH)

On getting back to my room one night I opened my laptop and started tapping out the basics. I wanted something very simple &#8211; a one-pager that I could load up quickly that contained a list of everything I&#8217;d collected in notebooks to date, as well as a search to let me quickly jump to whatever I was looking up. The intention was to build a little web page, and just to bookmark it on my phone&#8217;s home screen.

[<img src="http://recordssoundthesame.com/wp-content/uploads/2015/05/ahh2.jpg" alt="AHH screenshot" class="pull-left" style="max-width:200px;" />][1]

I also thought that I&#8217;d build in the ability to submit new items through the page (to capture them directly as I found new ones), but then I realised I&#8217;d have to at least put in some vague kind of authentication so that the wider internet couldn&#8217;t ruin it for me, and it all started getting a bit bigger than the simple one-page list that I&#8217;d first had in mind. I went back to basics, but initially stored my glossary terms in a JavaScript object as a bit of a weird halfway &#8220;_I&#8217;ll come back later and build in the form_&#8221; house. By the time I went for dinner that night I was done, albeit in a scrappy way.

I&#8217;ve subsequently grown my collection of acronyms to over 100, which I was extremely excited about (gotta catch &#8217;em all), but I wasn&#8217;t happy with the code itself. The big thing was the page content being held in my scrappy JavaScript approach, which just quite frankly a shoddy thing to do. I switched it out quickly so that the items were all in markup instead, then sorting and filtering happened as an enhancement. Much better. 

### What&#8217;s next?

Of course the next potential update is offline functionality, which I&#8217;m still toying with as a potential lonely evening activity one week, but it&#8217;s not needed as such. If I add it in, it&#8217;ll be for my own amusement rather than being a core functional requirement.

As you can see, the design is rather uninspiring in the usual bland vein that all of my &#8216;designs&#8217; always are, especially for small things like this. Any pointers for how to make it slightly more beautiful (apart from &#8216;go and learn some proper typography that isn&#8217;t your go-to options on Google Fonts&#8217;) will always be gratefully received! For now however, and as a personal tool, it is passable and doesn&#8217;t offend my eyes as much as it could.

## Lessons

Of course, there&#8217;s always a moral to the story, and the real lesson here is about communication. Even armed with my handy guide and being a couple of months in to the contract, there are still phrases and terms that I don&#8217;t understand on occasion and it&#8217;s not always easy to put your hand up when there&#8217;s a risk of showing yourself up, or people thinking that you really should understand the subject matter by now.

This has been a great lesson to me:

  * To not use acronyms when you don&#8217;t need to (I&#8217;m even trying to keep them out of my project deliverables, as a new team is due to start and there&#8217;s no guarantee that there won&#8217;t be another outsider like me in the wings).
  * To set the tone so that people can ask you if anything doesn&#8217;t make sense (and for them to not have to feel stupid about doing so).
  * To not assume that everyone understands concepts that may be commonplace in other situations but not to theirs.

After originally posting this, I happened to see this on twitter not long after, and it struck a chord:

![Elon Musk on acronyms][2]

## Links

If you&#8217;re a fan of acronyms and would like to collect your own, you can find my working version at [Acronym Helping Hand on my labs][3], and the source code is either all in the single page source or [on GitHub][4].

 [1]: http://recordssoundthesame.com/wp-content/uploads/2015/05/ahh2.jpg
 [2]: https://pbs.twimg.com/media/CF4cFtLUgAASqYO.png
 [3]: http://recordssoundthesame.com/labs/ahh/
 [4]: https://github.com/greywillfade/acronym-helping-hand