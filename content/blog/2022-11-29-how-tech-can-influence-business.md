---
title: How technology can influence business decisions
author: Sally
type: post
date: 2022-11-29T01:00:00+00:00
url: /blog/2022/11/29/how-tech-can-influence-business/
description: I was recently invited to be on Skiller Whale's Primarily Context-Based podcast to talk about the topic of how technology can influence business decisions. This is a big and nuanced topic, and as we only managed to cover a small slither of it in the original discussion I thought I’d share some of my thoughts in a long-form blog post form as well as whatever ends up making it into the show.
class: bi-1
categories:
  - career
headerimg: '/img/content/blog/20221129-hdr.jpg'
---

<p class="lede">I was recently invited to be on Skiller Whale's <a href="https://open.spotify.com/show/2Y1EjtYp3Nhmlg4CWbNPtd">Primarily Context-Based</a> podcast to talk about the topic of how technology can influence business decisions. This is a big and nuanced topic, and as we only managed to cover a small slither of it in the original discussion I thought I’d share some of my thoughts in a long-form blog post form as well as whatever ends up making it into the show.</p>

## It’s important for tech leaders to understand the nature of the business they work in

Before we get into the _how_, let’s start at the beginning: why is this even something that matters?

In a technology company (such as one creating digital products) the relationship between tech-centric roles and business-centric roles can blur much more than in more traditional organisations, often with a CTO or technical co-founder playing a pivotal role in starting and setting out the direction for the company.

Despite this, in the podcast, we kept coming back to the topic of how it can be a common scenario even in these kind of digital-centric workplaces to find that they’ve fallen into the trap of perceived or actual groupings – the tech people, and the business people. Each group can feel like the other is a bit of a black box, and that each has an agenda in conflict with the others. As an over-simplified example: the tech people want to pay down tech debt, invest in infrastructure and developer experience, but the business only cares about revenue, growth, and shipping new shiny features. Whilst this perception of separation can start off small, it can easily grow. In a really bad outcome it can lead to rifts, a lack of trust, and breakdown in communication and working relationships, making it harder for the business to run.

The reality is that the majority of people reading this who work in technology probably do so within a capitalist system, and you work for businesses where the goal is to make money… or if not, the organisation still needs to succeed at its goals. In this sense, regardless of whether individuals work in a business-centric role (such as Finance, Growth, Marketing etc) or not, the reality is that everyone’s working towards the company goals and as such are all really “business people” in one way or another. (And as an aside, it’s also important to keep in mind that just because someone doesn’t work in an engineering role, that doesn’t make them “non-technical”)

## In a senior position, you’re likely to be charged with materially impacting the overall success of the business
Making sure you understand the business goals (which could be things like revenue generation, cost reduction and efficiencies, customer trust/satisfaction or tons more angles), current status, and operating environment lets you know how your piece of the puzzle fits in. It can also help you to make better decisions in both the long and short term for your org.

Even if you’re not (yet!) in a role where you’re required to work on this, it’s a good idea to be thinking about it anyway - it’ll likely be what your boss, or boss’ boss cares about. Selfishly, if you can have a good impact on the business, it could reflect really well on you. But less selfishly, if the business does well, this benefits everyone.  

The flip side to this is if the technology strategy is at odds with the direction, goals, and priorities of the business, you can end up with friction or tech-for-tech’s-sake as the business fails. If you don’t understand the business, you’ll likely lose credibility and trust if your efforts are misaligned. It’ll also likely be less frustrating for you, and easier for your org to operate effectively if everyone’s pulling in the same direction.

As a couple of examples:

* With the current downturn in mind, a business has a priority of cost reductions above all else. Work like simple supplier switches to save money (e.g. on hardware costs), or a project to increase efficiencies (e.g. saving developers X hours of manual task time per week) may be worth considering. However, a project which involves a supplier switch which unlocks new features, but which that takes a lot of time to implement, needs a new team to support, and has a big spend outlay up front is likely going to be a no go.
* Working in a regulated business, it may be important to focus on investment in resilience, security, audits etc over speedier and messier feature shipping to try things out and then pivot quickly, because the Regulators have given feedback to this effect.

So in a very simplistic form, you can generally boil the overall issue down to two things:
* **How technology can act as an enabler**, looking for ways to propel the business forward to achieving its goals (for everyone’s benefit).
* **How you can work to avoid misalignment**, friction, hindering the business, or wasted efforts.


## There are some common opportunities for technology to influence business decisions

Each business will be different depending on factors like its maturity, the problem space it operates in, and more. Size in particular can play a big role here. At a smaller size you may be able to influence directly, you may be (or easily have the ear of) a technical co-founder or similar senior leader. There could be less process. Larger business may have more hoops to jump through, be slower to adopt new ideas, or be generally more risk averse when it comes to overall business strategy. 

Despite various differences in orgs, you’ll find that typically there are numerous opportunities for technology to influence business decisions and outcomes in very different areas, and at least some should apply regardless of the type of place you work at. As a few examples:

### Customer interactions and experiences
The experience an end-customer has with the business will be the sum of a vast amount of business decisions, including product decisions, customer service, how to approach availability and reliability, security, and many more. 

* The technical and process strategy around operational resilience and customer experience - for example whether it’s worth having geographical or supplier separation within the architecture, or fallback methods which allow customers to continue to take some actions even if the primary method is down. This can come at great cost, but may be worth it depending on the nature of the business. For example [AWS](https://d1.awsstatic.com/whitepapers/compliance/AWS_Operational_Resilience.pdf) has made a number of decisions in their approach to preserve customer experience.
* The way that data is structured, stored, and accessed can make it easier or harder for product features to be built on top of it. As a personal example, [Farewill](https://farewill.com) went through a major replatforming/rearchitecture/data migration project last year which was a key piece in ultimately improving customer experiences, as well as being able to help us more effectively link related pieces of data.
* There have been multiple studies outlining the relationship between website performance affects conversion rates, including this piece from [Cloudflare](https://www.cloudflare.com/en-gb/learning/performance/why-site-speed-matters/)
* In the early days of responsive web design it was common to hear that “we don’t need to worry about  X browser/device because there’s such a low percentage of visitors”, without considering that an unusable site may have been driving those visitors away. Similarly this can apply to accessibility, with low numbers also relating to a poor current experience and a market underserved.

### Products, services, innovation
The offering a company offers, how novel this is, who the target audience is, and how successful it ultimately is often has a direct relationship with the technology that works behind the scenes.

* There can be very clear and direct relationship between technology and business decisions – for example in my former agency-side role, our decisions around whether to use Flash/HTML5/bespoke CMSs/licensed technologies like ColdFusion/open source technologies etc directly related to what we sold, and which projects we won.
* Going back to the Farewill rearchitecture, this in conjunction with bringing in some new technologies allowed us to move much faster and with more confidence when it came to spinning up new online products.
* Decisions around a technical build vs buy strategy will really influence where the business spends its efforts and what it’s able to dedicate energy to (amongst other things!)
* Strategies around tech debt (whether to use it as a tool, how to effectively pay it back etc) and a culture around whether the engineering “gardeners” or the “heroes” are rewarded can also help to influence development time, experience, and quality of output.

### Operational
Technology decisions can play a huge role in how the company works, down to internal tooling, staffing decisions, and much more.

* It’s important to remember that technology isn’t just about digital products and customers; it can also drive business decisions on how staff work, where, and how much friction there is (frustrating meeting room setups, anyone?)
* In my two last roles I’ve set up variations of Platform teams to compliment Product teams, and this kind of org structure decision and related technical outcomes can have a big impact on business outcomes. The [2020 McKinsey report](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/developer-velocity-how-software-excellence-fuels-business-performance) 'Developer Velocity: How software excellence fuels business performance' goes into more detail, but at a top level companies with a higher Developer Velocity Index (DVI) score outperform revenue growth up to five times that of their competitors and they score 55 percent higher on innovation.
* Some technology choices may come with certain overheads or will impact how the business is run, for example influencing skills that need to be hired for, headcount, financial costs, including costs of maintenance.

### Cultural
And last but not least in these illustrations, technology can play a huge role in the business culture, and decisions that come off the back of this.

* A strong culture of CI/CD may drive business decisions to run a large number of experiments and be open to constantly evolving a product rather than waiting for big bang releases.
* Having confidence through a solid observability/monitoring/alerting strategy may lead to a business with lower risk/change aversion.
* If the technology makes an effort to be inclusive, this often feeds itself by attracting people who feel this is important. Conversely, technology that can be used for harm, which perpetuates inequalities and bias, or which excludes members of society will find that the business could be shunned by many.
* Technology is often seen as behind the scenes, but a decision to make it more transparent, for example how Monzo release detailed blog posts around around both the product architecture and incidents can in itself be a business strategy to build customer trust, brand awareness, or even boost hiring.


Generally, there’s very commonly an opportunity for technologists to highlight risks, opportunities, practicalities, impact, and outcomes; making sure that you can articulate what different approaches will mean for the business and the results it’ll see. 

## But there _can_ be times where technology shouldn’t influence the business 
As you can see from the above, there are wide-ranging opportunities and I generally believe that on the whole technology influencing business decisions can be a very good thing. But to play Devil’s advocate there are also some times where it arguably shouldn’t. Let’s use a quick example:

A company makes niche specialist furniture, and is sustainable without being hugely successful. A technology leader there may champion the company dropping the physical products they make entirely and instead start to focus solely on selling the proprietary specialist software they’ve developed, because it has the potential to make more money and reach a wider commercial audience. This could even be true, but it doesn’t take into consideration that this is a family-fun business that’s been making furniture for generations, has lots of emotional ties, and thinks about more than just Pound signs.

In scenarios like this technology can still influence and be a consideration for the overall business strategy (in some places maybe this would be a smart move or a good spin-off business!), but it’s important to not forget the many very human aspects that can come into play with businesses. 

Equally, not everything always needs to centre around technology, and indeed you can easily fall into the trap of tech-for-tech’s sake and flashy, over-engineered solutions. ([Vibrating smart weight loss fork](https://www.hapilabs.com/product/hapifork/), anyone?)

<figure>
    <img src="https://imgs.xkcd.com/comics/the_general_problem.png"
         alt="An xkcd web comic where someone asks for the salt to be passed, only for the reply to be around how the other is developing a system to manage it.">
    <figcaption>xkcd 974 – The General Problem</figcaption>
</figure>

I also briefly want to go back to my point about technology and “the business” seeing each other as distinct. Especially in tech companies there’s often a danger where engineering can position itself, or be seen as more important than other areas of the business. Extra weighting can be given to opinions purely because of that perception and standing. This can be dangerous when you’re in a situation where there’s a stalemate, and yet technology or engineering opinion gets the nod over other areas or subject matter experts, who may actually be better placed to make an effective call.


## There are lots of ways to bring this into your work
We’re now at the crucial point: how do you bring this kind of thinking back to the day-to-day? If you’re looking for opportunities for technology to influence business decisions positively, some of the things you may want to consider doing are:

* Make an effort to really dig around and understand the business. This could include metrics it uses to monitor the things it cares about (which could maybe be improved!), goals, the markets and environment it operates in etc.
* Watch out for potential rifts and “us vs them” mentality. This could be in the language used, org structure, making sure your team isn’t operating as a ‘black box’ to the outside, knowledge sharing and education
* Build time into your role to keep learning about new things. Give yourself the ability to horizon scan and see opportunities which you can then take back to the business.
* Communication is so important when it comes to decisions getting made. Investing in your storytelling skills can make a big difference. Additionally, knowing the importance of visibility - making things easy to understand, surfacing things that may go unnoticed as to why they’re important – can also help to make a case. Or additionally, using tools like prototypes to help people understand can be useful.
* Building on this, learning how to influencing effectively is an incredibly useful skill, especially when it comes to influencing more senior stakeholders who you may not have a lot of crossover with. Lara Hogan has a ton of [resources](https://larahogan.me/resources/influence-manage-up/) on this topic, and also runs a really useful workshop. Additionally, you could focus on building relationships and trust, which can help when you later make a more risky proposal. If you can deliver your usual projects and BAU well, this will help give others confidence that your business decisions should carry weight.
* Be deliberate about the kind of culture you want to curate, and invest in it. With engineering teams often being a large percentage of the company, working to intentionally build this up can have a direct impact on the overall company success.
* And finally, create a strategy. Having this in place can help you be clear on how tech will support the company to meet its goals. It can force you to think about the future you want, which helps with long term decision making. It can also get everyone internally on the same page, which helps people operationally (e.g. knowing what to prioritise). And if you’re so inclined, sharing it externally can have positive business outcomes too, such as getting candidates excited to be part of your team!

## This is a massive topic, and we’ve only just scratched the surface
As I mentioned right back at the start, this is a huge topic! However hopefully this post has given you some points to mull over in terms of opportunities for technology to positively impact the business, some things to watch out for, and some areas to think about in a practical sense. Good luck with making some change happen!

Thanks to <a href="https://unsplash.com/@mikofilm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mike Kononov</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> for the header image
  
