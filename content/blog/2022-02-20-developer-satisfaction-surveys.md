---
title: Developer satisfaction surveys
author: Sally
type: post
date: 2022-02-20T12:00:00+00:00
url: /blog/2022/02/20/developer-satisfaction-surveys/
description: In response to a nudge that it'd be good to have more written about this, I'm sharing some thoughts on developer productivity surveys, and what we've been doing at Farewill.
class: bi-1
categories:
  - leadership
headerimg: '/img/content/blog/20220220-hdr.jpg'
---

<p class="lede">A recent <a href="https://twitter.com/Lethain/status/1493829234569072642">tweet</a> by Will Larson around developer productivity surveys caught my eye, as this is an area I find really interesting.</p>

Despite my interest, it hadn’t really clicked for me that this was a topic people don’t seem to write about too much. I thought I’d share out some of what my current engineering org at Farewill has been doing over the last year, in the hope that it may spark some thoughts for others.

As a little side note before I jump in, since I’ve been in my current role we’ve always called them “developer satisfaction surveys”. Semantics, I know, but the surveys we’ve created go a little bit broader into developer experience than purely productivity, plus they’re also a really joyous excuse for people to celebrate each other. I’m a big believer that _productivity_ (as businesses tend to see it) can be influenced by a ton of social dynamics, team, and other ‘non-technical’ factors, and that it’s worth getting folks’ views on these as well as things like CI/CD, tooling, and output. 


## It all started with a component library…

I believe we wrapped up the first iteration of the satisfaction surveys back in September 2019, for which I can take absolutely no credit for as I hadn’t even joined the company yet! At the time the company was using the [DIBBs](https://www.product-frameworks.com/DIBB.html) approach to prioritise what would be worked on, and [Charlotte Dann](https://charlottedann.com/), one of our most experienced engineers at the time, wanted to gather some data and insights to help her make the case for investing further in the component library. Given that she’d be sending it out to the team, she also took the opportunity to include some more general developer-centric questions, as she thought it would be interesting to track these quarter on quarter, to guide areas Engineering should focus on as a guild. In her words:

> “I was keen on getting some quantitative data specifically on refactoring and learning (whether it felt like we spent enough time on them) so I could push initiatives in those areas”.

When I started (at that point as Head of Engineering) around a year later, I quickly wanted to get a gut feel check on how the engineers and engineering managers felt about some other topics, based on gaps I’d started to identify. I sent out a quick but wide-reaching survey, spanning clarity around roles and responsibilities, attitudes to glue work, decision making, technical standards, security, testing, systems ownership, and much more. I was also similarly interested in having some metrics to track over time, both to share with leadership, but also for the guild (and me!) to feel like we were making progress. I initially did this separately, but was thrilled when Charlotte talked me through what she’d already been up to.

We combined forces, and a little bit later another one of our Senior engineers, [Helena Thompson](https://helenathompson.dev/) then took over the survey's ownership. We’d started a fledgling what-would-become-Platform Engineering team, and as part of their work Helena was thinking about how mitigate challenges around supporting an increasing number of products and teams. She’d written a great document around defining maintainability, and was again keen to get some wider input from everyone to understand the role that Platform Eng could play, so there was a natural evolution when we decided to incorporate some of these themes into the survey.


## How we approach satisfaction surveys

I definitely don’t think we’ve cracked _the best_ way of doing this yet, and we’ve had challenges like lower participation and competing priorities at points where things have been particularly busy. However, in general we’ve found them really useful, and have gained some great insights through running the surveys. In case it’s useful to others, here’s an overview of how we’ve been approaching them to date.


### 🛠 Survey logistics are pretty simple

We’ve been running quarterly, anonymous health checks using Typeform surveys. They run separately to wider company surveys around culture etc, and are intended for Engineers and Engineering Managers. The main aims are:

* Spotting problem areas in engineering (and understanding what we could do differently)
* Uncovering opportunities for new technologies, ways of working, incremental improvements
* Checking to see whether teams have similar sentiments, or if particular areas feel very differently to one another
* Tracking whether people are generally feeling ok about the state of engineering
* Giving us a way of measuring over time

I typically don’t tend to participate, as I’m much more interested in what others have to say, and don’t want to skew the data if my thoughts are way out of line with everyone else’s!

Survey participation is entirely optional but very much encouraged, and we find that people are usually generous with their thoughts as they feel it’ll be to their benefit.

At the moment the surveys have a single owner (Helena). Whilst it wasn’t a conscious decision for these to be Engineer-led (as opposed to Eng Managers), I’ve realised I don’t actually feel strongly about it either way. EMs often have time and capacity, but I also think it’s pretty great when Engineers are involved in this type of initiative. A pairing could be really nice, including to minimise pressure on one person being a bottleneck.

We communicate a lot through Slack, so typically the surveys are shared out and chased up there, with other nudges or discussions happening as needed. 


### ❓ Questions we ask

The questions we’ve asked are a mix of quantitative, scored questions on a numerical scale, and qualitative to get additional context or ask more open-ended questions. So far we’ve stuck with this because it minimises the burden on both responders and the organiser (as opposed to everything being free text).

#### Identifying participants
We don’t tend to ask much of people here; we just tend to ask for the team they’ve been in that quarter, and how long they’ve been an engineer at the company. This helps us to see if responses skew too heavily towards certain patterns, which could influence our analysis. Something we could ask (but haven’t to date) is what level of seniority people are, or what tech specialism they work with (although we have a lot of generalists).

#### General questions
These help us take a bit of a general temperature check, and cover things like:

* If people get helpful feedback on the code they write
* Whether they feel they have a good say in technical decisions involved in their work
* If they feel comfortable asking for help with any issues they may face doing their work
* Whether their skills and abilities match well to the demands of the tasks they’re working on
* If they think we spend adequate time on tech debt, refactoring, and engineering improvement projects
* If they believe change will be made in response to this survey
* What they feel is stopping them from working on things that they see could be improved? (I initially added this as a nudge for individual accountability for change, as well as understanding wider blockers that I may be able to dismantle)
* If there any technologies they think we should consider using which we don’t currently
* What type of hires they’d like us to make in the team this year
* What initiatives they think we should be prioritising
* What topics they’d like to learn more about in our regular Engineering Talks
* Any other suggestions people have for the survey in future

#### Codebase-specific questions
We then run through major parts of our tech ecosystem, for each one asking people things like:

* Whether they’ve worked with this particular codebase over the last quarter
* If they’re clear on its ownership
* How confident they feel in their understanding of the inner workings
* How confident they feel in identifying issues and fixing bugs
* Whether building features is a painless process
* Their level of confidence merging PRs into main
* Whether there’s been comprehensive and accessible documentation available when they’ve needed to find out more
* Whether they’re happy with the range and quality of tests, leaving them with confidence in the changes they make
* How they feel about code readability and consistency
* Whether they feel there’s good monitoring and alerting, and if they know how to navigate tooling for this
* Whether they feel their development workflow is straightforward, from local environment config through to deployment

#### Celebration!
* What people feel particularly proud of working on over the last quarter (especially if it’s less ‘visible’).
* Which member(s) of the guild they’d like to celebrate for doing an amazing job

On these, we have more formal feedback gathering and review processes, but especially to include in the sharing back this part is always SO lovely. We get such a range of people being submitted, and for such a variety of reasons. I really like how it encourages people to think about how the folks around them can make a difference to their satisfaction and productivity, and in turn can encourage them to reflect on what they themselves can do for others.


### 👩🏻‍🏫 Analysis and presenting back

Like all of our documentation, we keep information about the surveys in a dedicated page of the company-wide accessible Notion.

Each quarter has a little editorialised summary, along with links to the Typeform report, any slides from presenting it back, when the results were shared, and the number of respondents. In the summary we’ll cover things like:

- Things to celebrate
- Areas where we have concerns
- What we’d like to happen next
- Diving into individual insights and trends, along with suggested actions for each

Having results stretching back to 2019 means that we can see whether feedback is trending in the right direction, and all of the results get added into a centralised spreadsheet where anyone can look at the entire dataset. We’ve had a decent amount of consistency through keeping many of the same questions, but have been thinking even more about standardisation to help with this – for example with the codebase questions, following Helena’s recommendations we settled on documentation, ownership, testing, code quality, observability, workflow, as factors making up an overall “maintainability” score.

We present back the survey results at the fortnightly Guild meeting, and have also had follow-up discussions on specific topics that warranted more discussion as a group around what we’d like to do. As part of the Guild session I typically try to share back any wider business context/visibility that may be useful, and aim be as honest as possible – for example _“I’m personally planning on focusing on this next month, which should help with X”_, or _“I really agree and want us to improve on Y, but being realistic we’re not going to be able to prioritise it unless someone wants to take this on?”_.

Similar to my point above about ownership of the survey, it’s important to me that we’re discussing the themes openly, and where possible people are teaming up to think about what we can do to move things forward. I’m keen to avoid surveys being a vessel for Engineers to vent, and for the results to be taken away by me/management who go away and ‘fix things’ (or not!) opaquely behind the scenes, only returning to check in  the next quarter. Some improvements will always be a bit more 'managery', but by framing it a bit more collaboratively, it can become a great opportunity to find development opportunities for people across a range of areas.

And finally, I also share the results back with Leadership and the Exec so that they’re aware of how people are feeling and what’s important to them. This is usually in conjunction with reflection over the past quarter more generally/looking forward to the next, but again rather than focusing purely on business-centric wins and losses I also particularly make an effort to call out some of the celebrations, so they have visibility of the little things that people in the team do that can mean a lot to the folks around them.

## I’d love to hear what you do!
Hopefully this is useful, but as I mentioned back at the beginning this is a topic that I find really interesting and would love to learn more about. If you’ve written up any thoughts on how your teams approach this please feel free to send them my way.


Photo by <a href="https://unsplash.com/@jcoudriet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Coudriet</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
