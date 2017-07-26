---
title: Scotch on the Rocks 2011
author: Sally
type: post
date: 2011-03-08T15:35:52+00:00
url: /blog/2011/03/08/scotch-on-the-rocks-2011/
categories:
  - Conference
tags:
  - SOTR

---
After three non-stop days of travel, keynotes, sessions, and networking, Scotch on the Rocks is now over for another year. The quality of the speakers this year was first class, and that coupled with an excellent venue and a brilliant community made for what I consider to be the best Scotch yet.

The conference was held at the Apex International Hotel in Edinburgh, and with the majority of attendees staying either in the International or its neighbouring sister hotel the Apex City it ensured that there was always a large contingent of people to chat to at any time of the day or night. A step up from last year&#8217;s London-based TigerTiger venue, the International allowed the conference to take over several main areas of the hotel, and this resulted in an event which felt like it flowed better than previous years despite the limitation of smaller rooms such as &#8216;Starscream&#8217;. Thank you to all of the Apex staff for looking after us and for providing excellent tea and muffins in particular. Just one request &#8211; please get someone to look at the internet access before several hundred wifi-crazy attendees descend on you again next year! Conference organisers Fuzzy Orange did another great job, so many thanks to Andy, Matt and Leanne for all of their hard work.

It&#8217;s all very well to feel that the conference was a great success, but it was great to see that feeling being backed up by some stats in the closing speech. Despite the recent economic hard times attendance was up, there was a great spread of visitors from the UK, Europe and beyond, and 48% were first time Scotch attendees. Most interestingly, 14% of attendees were completely new to ColdFusion, which was likely helped by the drive to encourage more university students to attend by offering free tickets.

### The sessions &#8211; day 1

**Adobe keynote &#8211; Terry Ryan and Adam Lehman**

After a brief introduction from the Fuzzy Orange team we were off&#8230; Terry Ryan from Adobe asked us to think back 5 years to more simple days, when HTML/Flash/back-end sites were the norm, instead of the present day situation where you tend to have all of that plus the mobile version, iOS app, Android app and more. Terry wants to make us faster at the ColdFusion side of things, and to make CF do more for us so that we can spend more time on the UI. This concept was illustrated nicely by showing a video (sped up) of building an Android app in 38 minutes, start to finish.

The recent Adobe staff changes were then touched on, and although it will be very sad to see Alison and Adam go I think there&#8217;s great potential for the future. Other announcements were made, in the form of community blogs being localised, ColdFusion Box for Android is coming, and there&#8217;s a new CF Application catalogue.

Then to part one of the big news &#8211; the ColdFusion Builder 2 beta is now available for <a href="https://www.adobe.com/cfusion/entitlement/index.cfm?e=labs%5Fcoldfusionbuilder2" target="_blank">download!</a>Improvements are varied, but include elements such as code folding, improved todo functionality, code formatting (the way you want it to be, not pre-defined), keyboard &#8220;shortcuts&#8221; (jumping between functions, attributes) to enable you to keep both hands on the keyboard, better search functionality. Code assist has been upgraded so that it now knows about queries and can drop in elements such as required attributes. A new feature demoed called Quick Fix looks to be very useful. This allows code to be written, which, instead of flagging up if components/functions do not exist instead allows you to create them in the location of your choice. The extension abilities have been updated, which can best be summed up by <a href="http://www.adobe.com/devnet/coldfusion/articles/cfb2-extensions.html" target="_blank">this video</a>.

Next up: public details of ColdFusion 10 and associated announcements. Lots of things in 9 were set up as foundations for 10+, and Adobe are planning 3 versions into the future. I will skim over these as a lot more information will be released through more official channels, but Verity is out (Solr should be used instead), JRun is out in favour of Apache Tomcat (there will be a top-to-bottom Adobe-supported version of Tomcat), in terms of web services Axis1 will continue to be supported behind the scenes for compatibility reasons but X will will be upgraded to Axis2, meaning much greater support for REST as well as Exchange 2010 support. The scheduled task engine has been rebuilt from the ground up, and will include support for ranges, conditionals, triggers and chaining, priority, grouping and more. It will also be application specific. cfjobs will be introduced &#8211; Jobs will be similar to scheduled tasks, but will be standard CFML queued for execution which can be modified as and when necessary. Finally dynamic java class loading, dynamic java proxies, and CFML closures were outlined, with closures apparently going to be very similar to the functionality outlined by <a href="http://blog.mxunit.org/2010/01/what-would-your-cfml-look-like-with.html" target="_blank">Marc Esher</a>.

Other elements teased without any detail were Flex/Flash remoting, HTML5/jQuery, mobile. There is also a new public bug tracker (beta), which has been completely rewritten in ColdFusion.

It was great to hear details being made public for the first time, which was a real scoop for Scotch. I know there&#8217;s a lot, lot more to come though, so I can&#8217;t wait for more announcements to be made over the coming months.

**Requirements and estimating &#8211; Peter Bell**

For my first session I chose Peter Bell&#8217;s talk on estimating, as it&#8217;s something that makes up a large part of my job. It was very interesting to hear someone else&#8217;s take on their approach, and whilst I feel that some of the points raised didn&#8217;t always match my experience (sometimes the Iron Triangle seems unavoidable, clients don&#8217;t always want to pay/don&#8217;t have time to put against strategy/estimation phase) I&#8217;ll definitely be taking my notes back to work to pass on to my colleagues and hopefully bring in some improvements.

The session itself was very confident and polished, and covered topics including the discussion of what we should build (business intent, audiences, user stories), estimation itself (how much, estimating scope and duration), managing risk, and managing commitments. Concepts I found particularly interesting were that of using tshirt sizes and point systems to match task sizes against, planning poker, and the laughs that estimating developments that use APIs got.

**oAuth&#8230; WTF? &#8211; Matt Gifford**

For the next session it was into a packed Starscream room, complete with people sat on the floor and perched in the doorway. Matt Gifford is an entertaining speaker with a lot of personality and passion, and having seen him speak previously I was excited to hear his take on oAuth.

The session opened with a discussion on whether as developers we should ask users to create accounts associated with an email address &#8211; email is a personal identity, and helps tie together accounts on otherwise un-associated sites. Counter points were raised about the fact that email is often needed for sign-up validation, and that some users actually prefer using email as their username as it&#8217;s memorable. This type of discussion around privacy illustrates that there is no one right answer, but that systems such as oAuth aim to guide developers into a security and usability-focussed way of thinking as no personal information is passed around.

Whilst I have done some work with oAuth in the past and so wasn&#8217;t a complete stranger to the topic, Matt&#8217;s talk explained the concepts in a very understandable fashion and left me feeling confident about delving deeper in the future.

**Flex 4.5 mobile with ColdFusion 9 &#8211; Terry Ryan**

As a ColdFusion and Flex fan, this was another obvious choice of sessions for me. Developing for mobile is a topic that is coming up more and more in my day job, and we&#8217;re obviously always looking for ways we can do it better and faster. To see Terry&#8217;s claims of creating a simple app with a ColdFusion back end in only 38 minutes firsthand was great, and was yet another session that left me wanting to go away and play.

The session started with an introduction to developing for mobile, including an overview of common challenges at present. Terry explained that Flex 4.5 aims to try to fix some of these problems. We were then taken through some specifics, including view navigator/tab navigator, ActionBar etc, then on to the Data Services wizard and beyond.

Flex 4.5 presents us with a great opportunity to create and deploy apps to multiple platforms easily. Coupled with the rapid application capabilities that ColdFusion 9 (and 10!) gives us, it&#8217;s hard to see an easier way of building powerful functionality very simply.

**Education &#8211; Terry Ryan**

It was great to see so many students coming to Scotch after Fuzzy Orange had decided to offer free tickets to all in full time education, or those working in education. The students were encouraged to attend Terry&#8217;s third appearance that day for an open Q&A session related to all things Adobe and education. Now, I&#8217;m not a student at the moment, but due to having a keen interest in this area I gatecrashed (with Terry&#8217;s kind permission) as I was very interested in the students&#8217; perceptions of Adobe, ColdFusion, and the professional work.

For me, the session turned out to be one of the most interesting of the entire conference. It was a very honest, open discussion, and topics covered included pricing, hosting for educational ColdFusion projects, the future of Flash and demand for developers, and whether it was &#8216;too easy&#8217; to start learning programming with ColdFusion or ActionScript.

**Consuming ColdFusion services outside of the CFML world &#8211; Claude Englebert**

As a topic which has been covered several times since its announcement, Claude managed to give a session on ColdFusion 9&#8217;s Exposed Services which was simple and easy to understand, yet comprehensive. It also managed to feature my name (though thankfully not the dreadful photo taken earlier that day&#8230;) in a namecheck to the paper myself and Julian Wheaton at Lightmaker had put together for Adobe in 2010, so I&#8217;m somewhat biased that it was a great session!

Claude started by introducing what was available, and took us through some PHP-based examples of common out-of-the-box scenarios in order to detail what is currently available and how to do it. Additionally it was described how it is possible to extend existing services to perform non-standard functionality, in theory opening up all CF functionality to other languages in an incredibly simple fashion &#8211; &#8220;ColdFusion Web Application Construction Kit vol 3&#8221; was namechecked as a great reference.

**Adobe Q&A session**

And with that the first day of sessions was over. At this point some left, some found the free bar, and some of us gathered in the Megatron room for an Adobe meet the team Q&A session. A lot of topic were dodged nicely, and I&#8217;m not going to report on things touched on in case they get mis-represented somehow. In any case the crowd seemed to appreciate that they had been given the opportunity to grill product engineers, Adam, Claude, Terry, and guys from the Edinburgh office.

### The sessions &#8211; day 2

**Wee chat with Gert and Mark**

Day 2 kicked off with another keynote, and another packed Optimus room. Gert and Mark&#8217;s &#8220;wee chat&#8221; started with the motion that we should all be proud of being CF developers, we should encourage others through blogging, and get people talking about it. There was a bit of PHP bashing, and a sly dig at release cycles, but all in all the message was overwhelmingly positive, and one that had important underlying messages of how we need to keep an already great community strong into the future. The benefits of open source, and Railo in particular were covered, and the guys were clearly very pleased with the progress they had made over the last few years.

**Introduction to jQuery Mobile development &#8211; Raymond Camden**

From feedback during and after the event, it seems the session with the biggest immediate impact was Ray&#8217;s jQuery mobile session. Twitter was immediately flooded with tweets about how people were sitting in later sessions trying this out, or were intending to implement it as soon as they returned to work.

Ray is always a great speaker, and was a fantastic catch for Scotch. Well paced and structured, despite a few technical issues at the start, the examples managed to cover a large amount of ground in a short time which is testament to Ray&#8217;s presenting skills. The fact that the presentation was available on SlideSix, and the demo code was up on Ray&#8217;s site so soon after the session helped people capture their enthusiasm early. jQuery Mobile is definitely something I will be looking into more having returned from Scotch, and could potentially be a very useful tool.

Code and slides: <a href="http://www.coldfusionjedi.com/index.cfm/2011/3/4/jQuery-Mobile-presentation" target="_blank">http://www.coldfusionjedi.com/index.cfm/2011/3/4/jQuery-Mobile-presentation</a>

**Home for 5pm &#8211; Andy Allan**

As one of the organisers of Scotch as well as having a full-time day job, Andy is a man who clearly understands the need for organisation. He starts by detailing scenarios we&#8217;re all familiar with, covering those times people come over for a chat and distract you, new tasks get thrown your way, and before you know it you&#8217;ve got 71634 tabs open and you&#8217;ve completely forgotten why they&#8217;re all important&#8230; you just know they are. Apparently this is all Justin Bieber&#8217;s fault ;)

Andy&#8217;s session ran through Tasktop & Mylyn, integration with Trac, and showed some start-to-finish examples of how situations would run using the workflow. The revelation of the I&#8217;m Feeling Lazy button got everyone excited &#8211; including Andy!

**Document support in ColdFusion 9 &#8211; Chandan Kumar**

Whilst ColdFusion&#8217;s document support is arguably not necessarily the most glamourous topic of the conference (No mobile! No HTML5!), it&#8217;s functionality which has been incredibly useful for many developments I have worked on, and I did not want to miss the chance to hear one of the CF engineering team speak on it.

Chandan&#8217;s presentation gave a great overview of the functionality and new features available in version 9, starting with demystifying PDFs, and moving on to cover all of the other major document features in great detail.

**Expand your mind with noSQL and then relax on the CouchDB &#8211; Mark Drew**

One of Mark&#8217;s first points is to clarify that noSQL means not only SQL, not NO SQL. This is an important concept to grasp, and sets up his premise that SQL databases are useful in the right situations, but that it&#8217;s important to consider whether SQL is actually the best fit. The standard relational database implementation #fail is illustrated by a diagram of the Marvel universe, aimed to complement descriptions of limitations such as horizontal scaling, performance, flexibility and that the domain cannot always be modelled effectively.

Moving on to CouchDB, Mark details that it is a schema-less way of storing structured data accessible via a RESTful HTTP/JSON API and outlines some examples using Futon on OS X. CouchDB The Definitive Guide is plugged (available at <a href="http://guide.couchdb.org/" target="_blank">http://guide.couchdb.org</a>), which may be a useful guide for those looking into this further. Whilst not immediately relevant to any developments I know of at the moment, I&#8217;ll bear noSQL and CouchDB in mind for the future.

### To be continued&#8230;

Conferences tend to leave you with that warm glow of enthusiasm and excitement that we all know and love, and I&#8217;ll be looking to harness that over the coming weeks and months. In terms of personal highlights, things that stood out for me included Terry Ryan and Adam Lehman&#8217;s opening keynote in which details about ColdFusion 10 were revealed publicly for the first time, and the announcement that ColdFusion Builder 2 (Beta) was available to download as of then (if you could get online ;) ). One of the best parts of Scotch is always the great crowd it attracts, and it was great to catch up with lots of familiar faces and names, and to meet a lot of new people too. One such person was the legendary Ben Nadel, and of course I took the opportunity to have a <a href="http://www.bennadel.com/index.cfm?site-photo=468" target="_blank">photo taken for his blog</a>.

So, will I be back next year? Definitely. I&#8217;m extra pleased to be able to say that as the lucky winner of a ticket to SOTR 2012 in the chaotic &#8216;raffle&#8217; (extra special thanks to Andy for his excellent selection skills. I shall make sure to remember that I <3 CF stickers win prizes!), but I would recommend Scotch to anyone regardless of whether they&#8217;re currently working with CF or not. Hopefully we&#8217;ll see even more new faces next year.

[Photos are available on Flickr][1]

 [1]: http://www.flickr.com/photos/greywillfade/sets/72157626218350462/