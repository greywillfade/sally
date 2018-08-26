---
title: An introduction to open data
author: Sally
type: post
date: 2015-10-24T17:34:29+00:00
url: /blog/2015/10/24/an-introduction-to-open-data/
headerimg: '/img/content/blog/20151024-header.jpg'
categories:
  - Uncategorized

---
<div class="module highlight">
  <p class="lede">
    This is an altered-for-the-written-word version of a talk that I gave in several forms in 2015, including at Fronteers (Amsterdam), From the Front (Bologna), and Web In the Woods (UK). If you’d like to hear it in person, or if you’d like me to give a version at your event, please see my <a href="http://recordssoundthesame.com/speaking/">speaking page</a> for further information or <a href="http://recordssoundthesame.com/contact/">get in touch</a>.
  </p>

  <p>
    This is a lengthy read and is quite image-heavy due to the nature of putting a talk into words. It will possibly take you around 30 minutes (or longer if you explore some of the things I&#8217;ve referenced), so I&#8217;d recommend grabbing a cup of tea before you get started.
  </p>
</div>

## Introduction

One of the things that I love most about my job is that it’s very broad, and that it constantly challenges my perspectives on things that I take for granted. Last year I worked on a project that was very different for me, and it ended up influencing this talk/article.

I want to talk to you about data; specifically the idea of open data. Everyone has gone nuts for data over the last 10 or so years, with buzzword terms like &#8220;_big data_&#8221; seeping their way into many a marketer&#8217;s vocabulary, and <a href="https://www-01.ibm.com/software/data/bigdata/what-is-big-data.html" target="_blank">IBM</a> recently publishing a stat that 90% of the world’s total data has been created just within the past two years. It’s something that has become so ingrained as part of our projects and our lives, often without us really considering it. We collect a huge amount of data, we use others&#8217; data, we publish data, and we use data to inspire the content that we publish on the web.

## Data & me

I love data. It’s not always directly part of my job, but I find it fascinating, and it touches many aspects of my life. Professionally I use tools such as Google Analytics to identify trends and issues with sites that I&#8217;m working with, and personally I can keep track of which of my recent witty anecdotes have been most popular using Twitter analytics, or to check how many steps I haven&#8217;t walked each day because I&#8217;ve been spending too much time on Twitter. In an excellent example of how context is as important as the data itself, my Last.fm profile not only shows assorted data about what I have listened to over the last 10 years and when, but also gives me insight into which years I&#8217;d favoured different devices and services (based on a lack of scrobbles).

[![lastfm data][1]][1]

I&#8217;m a fan of little side projects, and make stupid stuff with other people’s data, like using the <a href="http://developer.marvel.com/" target="_blank">Marvel API</a> and d3.js to find out which are the most popular Marvel characters by the number of times they&#8217;ve appeared in individual comics, how many series, stories, and events. I also make stupid stuff with _my_ data, with my <a href="https://sallylait.com/labs/teatracker" target="_blank">Tea Tracker</a> page, which details my tea drinking habits since November 2013.

But I’m sure, like me, when you make stuff and you’re not working with your own data, you’ve probably found yourself being deliberately limited by some of the data providers out there, or bound by terms that don’t meet your needs. Many of the data-based services that we use have very strict terms and conditions around usage, and can be prohibitive in many different ways. They can end up locking off data, and restricting usage. The Twitter API is notorious for this, but the Marvel API for instance also states that you can only use the data for:

  * non-commercial applications
  * that don’t portray Marvel in a negative manner
  * you can’t change, edit, or augment the content
  * anytime Marvel&#8217;s data appears onscreen it must be accompanied by Marvel&#8217;s copyright notice and a link back to Marvel&#8217;s own site

The delivery mechanism is also limited. It’s free at the moment but reserves the right to charge in the future. It’s also rate limited to 1000 API calls per day (which contradicts the logged in information that says 3000), but there are also rules around caching and content retention. If they terminate the API they may ask you to delete all their content.

My favourite clause is that “_you agree to maintain your apps and your systems in accordance with industry standard quality levels_”, because as far as I’m aware we’re still yet to conclusively agree on what a web app is and whether they even exist, so I’m not sure whether we’ve got on to standardise quality levels yet!

We can’t always get our hands on the data that we want, but of course, getting your hands on data is only one piece of the puzzle. Sometimes we’re restricted by whoever has put it out there in terms of what we can then do with it, and doing something with data is what really matters. The Marvel API is an example of data sharing, which is is the release of data for restricted purposes, to restricted people or organisations. Through using **open** data, the goal is that your consumption, analysis and presentation of data shouldn’t be controlled by the data publisher. This leaves you free to use it in ways that may not have been anticipated, or which allow subsequent works to build on ideas that you had started.

## What is open data?

But what is it that makes data open? Helpfully, so that we can have a shared understanding of what we’re talking about, <a href="http://opendefinition.org" target="_blank">opendefinition.org</a> houses one of the most popular definitions. On the site is a detailed explanation, but it can be summed up as:

> &#8220;Open data and content can be freely used, modified, and shared by anyone for any purpose.&#8221;

This is not a new concept, but is one that goes against many more traditional attitudes of how we approach data on the web, and it’s also one which is being standardised more as time goes on.

In fact, recently the <a href="http://theodi.org" target="_blank">Open Data Institute</a> in the UK produced a great diagram of what they&#8217;re calling the &#8216;data spectrum&#8217;. This shows the range of data that we may come across, from that which is truly open, through to various kinds of shared data, and into the realms of where data is closed off.

[![ODI data spectrum][2]][2]

<p class="caption">
  Data Spectrum by <a href="https://theodi.org/data-spectrum" target="_blank">The ODI</a>
</p>

With open data, you give people freedom. They can work with the data without restrictions from copyright, patents or other mechanisms of control. Through opening up your data, you could allow people to:

  * Republish the content or data on their own website
  * Derive new content or data from yours
  * Make money by selling products that use your content or data
  * Republish the content or data while charging a fee for access

These last two points are quite important to understand. The data itself should meet all of these criteria of being open, so the data itself can be freely used, modified, and shared by anyone for any purpose, but you may potentially choose, say, a delivery service with a commercial aspect, such an API that requires registration or has paid-for levels of access. Open data does not necessarily mean unlimited free access via APIs for everyone.

This is a concept that is both really simple, and actually quite confusing at the same time, and one of the reasons that I wanted to write about this was because there are often a lot of different interpretations or misinterpretations about openness in different contexts &#8211; data being one of them. There was a great article recently which discussed the <a href="http://theodi.org/blog/closed-shared-open-data-whats-in-a-name" target="_blank">naming conventions around open data</a>, again from the ODI, who you’ll see crop up a lot in the following sections. The article included this quote:

> “We observed that often people think of open data as a specific ‘kind’ of data – something separate and distinct from the data they use day-to-day in their organisation or team – rather than a choice about how people publish data.”

As here, open data isn’t something entirely different. The data itself in its raw form isn’t anything magical; it’s about the mentalities around it. You’re probably starting to get the picture that lots of this comes down to licensing, and you’d be right.

## Licensing

Open licences for creative content, such as Public domain (<a href="https://creativecommons.org/choose/zero/" target="_blank">CC0</a>), Attribution (<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY</a>), Attribution & share-alike (<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA</a>) are ones that many of us are familiar with, especially if we use services such as Flickr which specifically ask us to consider the licencing of our content. In terms of databases, we have similar options &#8211; Public domain (<a href="http://opendatacommons.org/licenses/pddl/" target="_blank">PDDL</a>), Attribution (<a href="http://opendatacommons.org/category/odc-by/" target="_blank">ODC-BY</a>), Attribution and share-alike (<a href="http://opendatacommons.org/licenses/odbl/" target="_blank">ODbL</a>).

There are other licences that enable reuse and which you may encounter, particularly around public sector information. A couple of note are Open Government Licences, which are attribution licences that cover both copyright and database right and are mainly used for information made available by central governments such as the UK and Canada. The OS Open Licence is an extremely similar attribution licence, but ensures that the attribution is to the Ordnance Survey instead.

But licensing is boring! Let’s look at why all of this is exciting.

## Where can I get my hands on open data?

There is some amazing data out there. When you talk about open data there are really well known sets, and ones that are often cited include <a href="http://wiki.dbpedia.org" target="_blank">DBPedia</a> which, essentially, makes the content of Wikipedia available in RDF, and also incorporates links to other datasets on the Web. We also have <a href="http://data.gov.uk" target="_blank">data.gov.uk</a>, which is a collection of datasets available from all UK central government departments and a number of other public sector bodies and local authorities.

But then there’s also data out there about pretty much anything you could be interested in&#8230; from <a href="https://musicbrainz.org/" target="_blank">MusicBrainz</a> (the open music encyclopaedia) to the <a href="http://labrosa.ee.columbia.edu/millionsong/" target="_blank">Million Song Dataset</a> for music-lovers, <a href="http://earthquake.usgs.gov/earthquakes/search/" target="_blank">global earthquake data</a> for geography nerds, to the really niche&#8230; <a href="http://plaidplug.com" target="_blank">current and voltage measurements</a> sampled at 30 kHz from 11 different appliance types present in 55 households in Pittsburgh. I lived in Indonesia for a long time so I have a lot of enthusiasm for keeping tabs on what&#8217;s going on there, but even then I’m not sure exactly why you’d want data on all of the <a href="http://data.id/dataset/daftar-titik-reklame-di-dki-jakarta/resource/361ce01f-34ed-4e00-a204-6062c7b9ad64" target="_blank">billboards in Jakarta</a>, including their orientation. Some people do though!

[![Jakarta billboards][3]][3]

<p class="caption">
  Infographic by <a href="http://blog.parasati.com/" target="_blank">Dyah Hayu Parasati</a>
</p>

Personally, I&#8217;m more likely to be interested in a dataset of <a href="http://web.archive.org/web/20150520175645/http://137.189.35.203/WebUI/CatDatabase/catData.html" target="_blank">10,000 cat images</a> and their attributes, but if you&#8217;re not a cat-lover how about <a href="http://vision.stanford.edu/aditya86/ImageNetDogs/" target="_blank">20,000 dogs</a> instead? Even the most unlikely sources may house something you can use for interesting analysis &#8211; take for instance the <a href="http://reddit.com/r/datasets/comments/3bxlg7/i_have_every_publicly_available_reddit_comment/" target="_blank">1.7 billion JSON objects</a> representing public reddit comments.

If you want it, the chance is that it’s out there in some form. There are plenty more weird and wonderful examples I could share, and when I originally started to put together resources for my talk I started collecting together a few data sets that I found particularly interesting. As is usually on the case though, I happened to find another excellent list of <a href="http://github.com/caesar0301/awesome-public-datasets" target="_blank">public data sets on GitHub</a> and it&#8217;s definitely worth a look if you&#8217;re after some interesting data. Not all sets are open in the true definition, so have a look at the licences.

## Using open data

If you find something that catches your eye, your consumption of that data will usually be pretty straightforward if you&#8217;re used to working with third party sources. As we’ve seen from that earlier quote, the _data_ itself isn’t special and won&#8217;t require special techniques; instead focus on identifying data that has an appropriate licence, and is of a good quality and level of detail for your needs. I’ll come on to this properly in a bit.

In terms of the technicalities open data is like most other data you’re going to be using anyway. You’re commonly going to be working with data in formats such as CSV, JSON, RDF, or XML, and you may be downloading the data periodically, or may have access to an API.

One potential stumbling block to watch out for is that some people release data ‘openly’, but it’s actually locked up in PDFs. These aren&#8217;t structured or easily machine-readable for parsing in the same way as say, JSON or CSV, and you&#8217;re going to have to work harder to get at the raw data.

You&#8217;ve grabbed some data. Great! Now what? There are loads of ways to visualise data with libraries like <a href="http://d3js.org/" target="_blank">d3.js</a> being incredibly popular, but of course this is going to tie in hugely to what you’re doing, and how visual the data needs to be &#8211; it may be that your project is more functional, with calls happening in the background, so don’t think that every data-heavy or data centric project needs to have some fancy dashboard _just because_.

Presentation should, of course use standards-based web technologies if you’re presenting on the web, and should ideally follow all the good stuff ideally of being performant (which can be tricky when you’re working with large data sets) and progressively enhanced. In addition, if you&#8217;re taking data, building on it and want to share your new work, make sure to provide a link way to access the raw data itself rather than forcing people to have to scrape it out of your beautiful site&#8217;s source code.

## More than websites

But these are still all just websites and datasets, for the most part. They’re contained. But I’d like to challenge you a bit today to do more with your data. To do that, let’s look at some slightly different examples.

First, I&#8217;d like to tell you the story of <a href="http://iquantny.tumblr.com/about" target="_blank">Ben Wellington</a> and a fire hydrant. Ben lives in New York, a place where since 2012, they have had a comprehensive city-wide open data policy. As you can imagine, all of that data on its own is good, but it takes _analysis_ to really maximise it.

New York is also a place where if your car is parked within 15 feet of a hydrant, it can be ticketed and towed. Now, thanks to the availability of open data, Ben ran a little experiment to see how much people were being fined for parking near hydrants&#8230; like you do. But he found something interesting. He mapped the top 250 grossing hydrants in New York, and one hydrant in particular was found to be grossing $33,000 a year. On just the next block, the second most profitable hydrant was generating $24,000 a year.

[<img src="http://recordssoundthesame.com/wp-content/uploads/2015/10/blobmap.jpg" alt="Hydrant map" class="alignnone size-full wp-image-1551" srcset="http://recordssoundthesame.com/wp-content/uploads/2015/10/blobmap.jpg 1000w, http://recordssoundthesame.com/wp-content/uploads/2015/10/blobmap-300x140.jpg 300w" sizes="(max-width: 1000px) 100vw, 1000px" />][4]

<p class="caption">
  Map via <a href="http://iquantny.tumblr.com/post/92116352544/mapping-nyc-hydrant-revenue-upper-easts-19th" target="_blank">I Quant NY</a>
</p>

He did some more investigating and found that these two parking spots were extremely confusing and basically seemed like a trap; there was a wide “curb extension” between the street and the hydrant, making it appear like the hydrant was not by the street. Additionally, there were painted parking spots right where you would be fined if you parked.

[![Original hydrant markings][5]][5]

So Ben put the data out there, the story was picked up by a number of people, and the department of transport commented that “_While DOT has not received any complaints about this location, we will review the roadway markings and make any appropriate alterations_”. If you look at the hydrant now, it looks like this.

[![Improved markings][6]][6]

Now of course, this raises a question over how happy the city was to be losing fine revenue, but in terms of the public good, open data and Ben did a great thing here.

But open data is not about companies losing money. The economic impact of opening up data has been the subject of several recent studies, showing benefits both in terms of generating value and cost savings. A 2013 <a href="http://mckinsey.com/insights/business_technology/open_data_unlocking_innovation_and_performance_with_liquid_information" target="_blank">McKinsey & Company report</a> estimated that open data could generate $3 trillion in additional value per year across seven sectors, and an <a href="https://www.omidyar.com/blog/business-case-open-data" target="_blank">Omidyar Network report</a> details the huge impact open data could have on meeting G20 targets.

### Transparency

The story in New York came out of open data becoming mandatory, but open data is also being viewed by organisations as a way to aid their transparency. There’s a great example of this in a book called <a href="https://books.google.co.uk/books/about/Thinking_in_Systems.html?id=6aMfnwEACAAJ&#038;redir_esc=y" target="_blank">Thinking in Systems</a> which has a bit about how in 1986 new federal legislation required US companies to report all chemical emissions from each of their plants. This data then became publicly available through freedom of information acts.

Many of the plant emissions were not illegal, but due to the access afforded you started to get the Buzzfeed equivalent of the day in the form of journalists creating stories like &#8220;A list of top 10 polluters!&#8221;. Within 2 years, and without legislation forcing it, nationwide emissions had decreased by 40%. Some companies were launching policies to bring their emissions down by 90%, just because of the release of previously sequestered information.

Transparency isn’t just about giving people access; it is also about giving them the freedom for sharing and reuse — as we’ve seen with Ben’s hydrants, often to understand problems, data needs to be analysed and visualised, and this requires that the material be able to be freely used and reused without conditions. Additionally, FOI requests are great, but it’d save everyone involved a lot of time and effort if it was open by default. For companies where a lot of resources are directed to answering requests such as these, considering making data open can be an important conversation to have.

## Data & human problems

I want to share one more example of how we can do great things when data is made more open. I’m a big advocate of thinking about the experience that people have when considering any kind of technical or build decision, and one of the benefits that open data can bring is to be able to combine data sets in ways that answer _human_ questions rather than being purely data-led, and to provide information in a way that gives a great experience.

This is what <a href="http://mapumental.com" target="_blank">Mapumental</a> have done; creating a tool that helps people to find a viable part of the country to live in based on the time it will take them to get to work via public transport.

> “How far do you live from your workplace? Chances are, you&#8217;d answer that question in minutes rather than miles. An hour on the bus tells us a lot more than 47 miles. That&#8217;s why we made Mapumental.
>
> Given any start point or destination, it&#8217;ll show everywhere within the chosen commute time, by public transport.”

The framework they created can then be applied to much more than home moves and commute planning, providing a tool for planners when thinking about public services:

> “How accessible is your nearest school, post office, or GP’s surgery?
>
> In Wales, that’s not always a simple question: the country’s mountainous landscapes, rural populations, and sometimes infrequent bus services can mean that those without cars are rather cut off from public service provision.”

And finally, again focusing on answering questions in a way that isn’t easily possible from raw data, they created a tool around emergency response times. This again allows answers to human-led questions such as “_How quickly could 4 fire engines get to a specific postcode_”, or “_Where can an aerial appliance get to within 15 minutes at 2am on a weekday?_”.

Tools like this can only come about when there is openness, and lack of restrictions on the data’s usage. The more we place restrictions, the fewer of these benefits we are likely to see. The more open data is, the better we can use it to help us with improved efficiency and effectiveness, or to let us measure the impact of different options. Data is a key resource in the modern age, and the more we can release it, or have the ability to consume it without limitations, the more likely it will be that innovative new products and services like Mapumental thrive.

## Beyond digital

Whilst most of the things that I have told you about live on the web, you don’t just have to work with open data in digital ways. People are also using open principles in conjunction with the physical world, and to create pieces of art. By opening up your data to any use you can actually get some amazing interpretations through different formats, that were never originally intended. Most of the terms and conditions around data don’t tend to think about this &#8211; for instance how can I meet the Marvel API criteria on something physical? I’m surely breaking the caching limitations instantly, and I’m not sure how I’d do a hyperlink in the strict sense.

<h3 title="ST4I">
  IoT
</h3>

Before we jump entirely out of the digital world, as a halfway house, schemes such as <a href="https://opensensors.io/" target="_blank">OpenSensors</a> aim to take the enthusiasm for the internet of things, and to encourage the publication of open data within physical projects through the provision of a real-time data exchange platform. Pricing for open data projects is free, and once you&#8217;ve registered your device you&#8217;re able to access, display and integrate the data from your devices in smart ways. An example they give is an environmental sensing project run by a community to monitor their local air or water quality, combined with real time and historical sets gathered by other communities.

### Doug McCune

But taking it further, into the realms of purely physical, <a href="http://dougmccune.com" target="_blank">Doug McCune</a> does a lot of artistic projects based on open data. His particular slant is that he loves to take horrible data and make something beautiful out of it.

In many of his posts, Doug explains the process that he has gone through in order to create each piece, and details the data sources used. He has also shared a great talk, <a href="http://dougmccune.com/blog/2015/05/01/desperately-trying-to-remove-the-air-quotes-around-the-word-artist/" target="_blank">Desperately Trying to Remove the Air Quotes Around the Word “Artist”</a>, which documents his shift in identity from a developer to an artist, and is something that I think is particularly interesting when we think about traditional relationships between coders and data.

[![Bay Area Homicide Constellation Map][7]][7]

<p class="caption">
  <a href="http://dougmccune.com/blog/2014/12/09/bay-area-homicide-constellation-map/" target="_blank">Bay Area Homicide Constellation Map</a>
</p>

[![Haiti Earthquake Tree Trunk Map][8]][8]

<p class="caption">
  <a href="http://dougmccune.com/blog/2013/09/25/haiti-earthquake-tree-trunk-map/" target="_blank">Haiti Earthquake Tree Trunk Map</a>
</p>

I&#8217;d recommend that you spend a few minutes having a look through Doug&#8217;s site. Go on, I&#8217;ll wait. He has some really lovely work, but the tales behind it around the data and his interpretation are what makes it particularly special.

### Stefanie Posavec

A designer with a focus on data-related design, Stefanie has worked on numerous open data-related projects over her career. One of her recent projects, [Air Transformed][9], focused on posing the question:

> What if we could really see and feel the burden that air pollution places on our bodies?

For the project, she created a series of &#8216;wearable data objects&#8217; that communicate the physical burden that air pollution places on our bodies. Though seemingly decorative, they are based entirely on open air quality data from Sheffield in the UK &#8211; a former steelmaking city notorious for its bad air. The first piece in this series, &#8216;Touching Air&#8217;, is a set of three necklaces made of perspex segments. I&#8217;ll let Stefanie explain:

> Each necklace represents a week&#8217;s worth of data from sensors measuring large particulate (PM10) levels. Since particulate matter damages the heart and lungs, we felt a neckpiece was an appropriate way of communicating this data.
>
> The segments range in size from small to large and in texture from completely smooth to spiky and sharp to touch; the larger and spikier the segment, the more particulates in

> the air at that time.
>
> By running their fingers over each necklace, the wearer can literally feel how the air quality in Sheffield went up and down over the course of each week. Dangerous particulate levels have the potential to hurt/prick the finger of the wearer.

The segments were also colour coded, with greens good and reds bad, creating an instantly recognisable visual impact in addition to the shapes used.

[![Air Transformed][10]][10]

[![Air Transformed bonfire night][11]][11]

<p class="caption">
  Contrasting weekly data
</p>

In addition to the above, Stefanie also created &#8216;Seeing Air&#8217;, which are sets of glasses made out of perspex. Again based on air pollution data, the layers of the glasses represent different types of pollutants, with larger or smaller patterns literally clouding the wearer&#8217;s vision in order to demonstrate the differences in Sheffield air quality on different days of the year.

### Participation & self-empowerment

People including Stefanie, Doug, and Ben, are all using open data as a way to get their message across in different ways. With data being open to any use, it encourages participation, and can also help people to solve their own, niche problems as well as addressing the big issues &#8211; for example a Danish lady, Tine Müller, built a service called <a href="http://beta.findtoilet.dk/" target="_blank">FindToilet</a>, which allows people who have weaker bladders to be more confident in exploring cities that they may not know well. If there is data is out there without restrictions, it can potentially help to make people&#8217;s lives better.

## Linked data

Up to this point, the examples I’ve showed you have been pretty self contained, and have had a single focus. There is a great TED talk by Sir Tim Berners-Lee which you can find below, where he talks about the growth of the internet, how he asked us to all put our documents on it, and we did. Now he wants us all to share the data that underpins those documents, but to maintain the original powerful concept of the humble hyperlink with this &#8211; the infinite navigable journeys that we can go on &#8211; the thing that makes the internet so special.

It’s not just about individual silos of data, it’s about what you can do with them, and more crucially the relationships you can forge between them.

<div class='embed-container'>
</div>

By having the freedom to reuse data and to _combine_ data sets with others, we can gain some great insight into solving problems. This is something that we’ve done a lot throughout the ages, and it’s not something exclusive to the web, but the web can help to facilitate it, and make it more accessible to people.

### You know nothing, John Snow

The relationship between drinking water pollution and cholera in London in the 19th century was discovered by Dr John Snow, who combined data about cholera deaths with the location of water wells &#8211; specifically one around Broad Street.

[![Broad Street cholera cases][12]][12]

<p class="caption">
  Original map by John Snow showing the clusters of cholera cases in the London epidemic of 1854. <a href="https://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak" target="_blank">Source</a>
</p>

Interestingly, there was one significant anomaly – none of the monks in the adjacent monastery contracted cholera. Further investigation however showed that this was _not_ in fact an anomaly, but further evidence of the pollution of the water supply, as the monks _only_ drank their own beer, and residents near or in the brewery were also not affected as a result of the fermentation of the contaminated water.

This led to the building of London’s sewage systems, and hugely improved the general health of the population. We can see the same benefits now &#8211; the more we standardise and are able to use open data in **combination** by linking it, the more easily patterns will be identified, and new knowledge gained.

### Making connections

This principle of Linking Data is a powerful one, and has gained traction since it first came to prominence in 2009. When you start to view data sets as being linkable, you start to build up a picture of the amazing resource that we have. But of course, as we can see from this diagram, where there is great potential to combine data, there is also great potential for things to get extremely messy.

[![Linking Open Data cloud diagram][13]][13]

<p class="caption">
  <a href="http://lod-cloud.net" target="_blank">Linking Open Data cloud diagram</a> 2014, by Max Schmachtenberg, Christian Bizer, Anja Jentzsch and Richard Cyganiak
</p>

This is where standards come in. The concept of linked data is itself a standard &#8211; “_a set of best practices for publishing and connecting structured data on the web_” &#8211; and comes with guidelines for how best to approach this.

Key technologies that support Linked Data are using URIs as generic identifier for entities or concepts, HTTP for requesting and receiving data, and RDF as a generic graph-based data model with which to structure and link data that describes things in the world.

The basic principles of Linked Data are to use the RDF data model to publish structured data on the Web, and to use RDF links to interlink data from different data sources. Very simply, you could have one dataset, described in a structured way, that has a semantic relationship to another, which in turn may have relationships to others.

### Misrepresentation

Links between entities are one thing, but when we start to introduce relationships between data sets, we also need to be mindful of the potential for misrepresentation and misinterpretation. In an academic sense you may have seen comments from scientists, arguing against the application of data because of data collected under different conditions, which should not be combined with others. In a &#8216;lolz on the internet sense&#8217; we have also all no doubt seen some wonderful examples of just how wrong data can go when taken out of its proper context:

![][14]

<p class="caption">
  IE Market Share vs Murder Rate on <a href="http://imgur.com/47D7zGq" target="_blank">Imgur</a>
</p>

I thoroughly enjoy the wonderful examples on the <a href="http://tylervigen.com/spurious-correlations" target="_blank">Spurious Correlations</a> site, which teaches us that correlation and causation may not be the same thing after all, and that Nic Cage is a very dangerous man.

[![Cage][15]][15]

### Combining data sets & licences

Interoperability can be key to making the most of data, however this is where licensing can get tricky. Take for example a scenario where you may have used data in your project that has requirements around attribution, which you followed, but you now want to release your work into the public domain with a licence that allows people to use it unattributed. This directly conflicts with the original licence. This is something to be mindful of, especially when you&#8217;re using a large number of data sources, all with different conditions.

## Publishing open data

So we’ve looked at people using open data, and we’ve looked at how we can link it. But additionally, I’d like to ask you to think about if there’s data that you could be publishing too, or whether you can build this into the projects you’re working on.

> “There are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns – the ones we don&#8217;t know we don&#8217;t know.”

> <cite><a href="http://en.wikipedia.org/wiki/There_are_known_knowns" target="_blank">There are known knowns</a></cite>

For me, one of the best things about the idea of open data is the fact that people can take your data and use it in ways you’ve never dreamed off. The above quote is one that’s mentioned a lot, but I always think of in conjunction with something called the Relevance Paradox, which is where people are unaware of certain information that could help them because they don’t know it exists.

It’s one of the great arguments for people putting data out there openly &#8211; as we spoke about at the start, data on its own isn’t that useful. Unlocking that value and the relevance may be the tricky part, and you may not be aware of the relevance of the data you possess, but others may. This can lead to great things, however it can also be problematic, as malicious uses may be possible too. We&#8217;ll come on to that in a second, but to finish off, I want to talk you through what sharing your data openly might entail.

### Step one: identification and planning

The first step, of course, is to identify what should (and what shouldn’t) be published. This will involve an assessment of what data you have, the quality of it, and to also plan the processes that will be involved in the data publication.

Many organisations start with the data that they release publicly at present, but which is not open, either because of the restrictions placed, or because of the formats. Data ‘trapped’ within PDFs is a great place to start as it is reasonably simple to apply a licence and to make this machine-readable through your site, but check the general T&Cs that you have there- many website terms are in conflict with the intention for individual open downloads!

Things that you&#8217;ll need to plan for include:

  * Clear **licensing and usage information** so that people know how data can and can’t be used.
  * **Structure and quality** &#8211; data should be cleaned, formatted in a logical structure, and presented as machine readable. Data may not be accurate, or may be incomplete.
  * A plan for **support** &#8211; data which is simply put out there but isn’t maintained will likely not be desirable.

### Step two: extracting and cleaning

Once the data has been identified, an extract or compilation may be needed (for example if personal details are held), or the data may need to be cleaned.

Much of the data gathered online or held by companies is around individuals. True anonymisation is notoriously difficult to do safely, and as such this usually means that most open data does not relate to individuals, and where it does, it’s usually aggregated statistics, such as the results of the census. The exception is where data is made available by the relevant individuals themselves, where there is explicit consent of the affected individuals, or where there is a mandatory reason.

An interesting example here is that in Scandinavia, everyone’s tax return data is available openly. This includes everyone from the government to celebrities to your neighbour. It opens up some interesting discussions &#8211; this level of transparency can do good, and can help to alleviate problems from pay disparities between the genders or in individual companies, or provide information about market rates to employees. However in the UK it’s something we’re typically not comfortable with, and the policy has actually been revised over time to protect more individuals rights.

As we mentioned briefly before, data may be innocent enough on its own, and you may feel happy to put it out into the wild, however with enough combinations of seemingly unrelated data, it could actually be possible to find out an awful lot about individuals, even if the data itself is anonymous. Make sure that you consider this when you are extracting your data.

In terms of cleaning, there are many tools available to aid in these processes &#8211; <a href="http://openrefine.org/" target="_blank">OpenRefine</a> is one that is widely used to clean, transform, and extend data with web services. It’s really, really useful and I’d recommend it if you’re working with data in any way, not just thinking of releasing it openly.

### Step three: sharing

Sharing and publication can take many forms. Putting the data out there is one aspect, but then helping people to find it and use it is another. In terms of how you share it, there are a couple of schemes that are there to provide guidance, the first being <a href="http://5stardata.info/en/" target="_blank">5 Star Open Data</a>, again from Sir Tim Berners-Lee.

The idea is that by following a rated deployment scheme, you can encourage people to provide data in better quality formats. The levels are:

  * 1. Make your stuff available on the Web (in whatever format) under an open license (<a href="http://5stardata.info/en/examples/gtd-1.pdf" target="_blank">example</a>)
  * 2. Make it available as structured data (e.g. Excel instead of image scan of a table &#8211; <a href="http://5stardata.info/en/examples/gtd-2.xls" target="_blank">example</a>)
  * 3. Make it available in a non-proprietary open format (e.g. CSV rather than Excel &#8211; <a href="http://5stardata.info/en/examples/gtd-3.csv" target="_blank">example</a>)
  * 4. Use URIs to denote things, so that people can point at your stuff (<a href="http://5stardata.info/en/examples/gtd-4/" target="_blank">example</a>)
  * 5. Link your data to other data to provide context (<a href="http://5stardata.info/en/examples/gtd-5/" target="_blank">example</a>)

The costs and benefits of each level are also detailed in depth on the website, and of course this isn&#8217;t just about publication &#8211; these are also things to look for when you’re looking to consume open data too.

Aiming to give a less technical and more well-rounded view of a ‘good’ dataset, <a href="http://certificates.theodi.org" target="_blank">Open Data Certificates</a> are being pioneered by the Open Data Institute. These include information around rights and licensing, documentation, and guarantees about availability. It aims to act as a reference sheet containing information of interest to re-users of a dataset, and to show that it’s easy to find, use and share data.

[![Open Data certificate][16]][16]

Once you have decided how your data will be shared, where you will share it (there are a number of excellent portals available from within the repo of data sources), and whether you will provide supporting information through one of the schemes here, don&#8217;t forget the main thing &#8211; tell people! There is a passionate data community out there who would love to hear about your offerings.

## Conclusion

In summary, we now live in a society where information is key, and data underpins both many of our projects and the way that we live our lives. We collect it, we use it, and sometimes we share it. Data, as with documents, is a fundamental element of the web itself.

Rather than data being something which is hidden below our applications, we can bring it to the forefront, make it more powerful, and use it to gain benefits either indirectly or directly. We can do this by using more open data, publishing data, thinking about how our data fits into the bigger picture, and whether it can be linked with other sets to enhance its context. By removing unnecessary restrictions and promoting freedom and creativity of usage, and by embracing standards and open web technologies, we can provide an amazing resource. With better, more freely available data, society can start making better decisions, improving costs, being more creative, and sparking new innovations that would not otherwise have been possible. By consuming or publishing open data, you too can help to promote this, and to help the data grow.

<div class="module highlight">
  <p class="lede">
    Thanks for reading
  </p>

  <p>
    If you&#8217;d like to discuss anything in this article, please get in touch via my <a href="http://recordssoundthesame.com/contact/" target="_blank">contact</a> page, or leave me some of your thoughts below.
  </p>
</div>

 [1]: http://recordssoundthesame.com/wp-content/uploads/2015/10/lastfm.jpg
 [2]: http://recordssoundthesame.com/wp-content/uploads/2015/10/ODI-data-spectrum-Latest-version-20151002-01.png
 [3]: http://recordssoundthesame.com/wp-content/uploads/2015/10/billboards.png
 [4]: http://recordssoundthesame.com/wp-content/uploads/2015/10/blobmap.jpg
 [5]: http://recordssoundthesame.com/wp-content/uploads/2015/10/originalparking.jpg
 [6]: http://recordssoundthesame.com/wp-content/uploads/2015/10/newparking.jpg
 [7]: http://recordssoundthesame.com/wp-content/uploads/2015/10/constellations.jpg
 [8]: http://recordssoundthesame.com/wp-content/uploads/2015/10/haiti.png
 [9]: http://www.stefanieposavec.co.uk/data/#/airtransformed/
 [10]: http://recordssoundthesame.com/wp-content/uploads/2015/10/AirTransformed_2.jpg
 [11]: http://recordssoundthesame.com/wp-content/uploads/2015/10/AirTransformed_22.jpg
 [12]: http://recordssoundthesame.com/wp-content/uploads/2015/10/cholera.png
 [13]: http://recordssoundthesame.com/wp-content/uploads/2015/10/lod-cloud.png
 [14]: http://i.imgur.com/47D7zGq.png
 [15]: http://recordssoundthesame.com/wp-content/uploads/2015/10/cage.png
 [16]: http://recordssoundthesame.com/wp-content/uploads/2015/10/cert.png
