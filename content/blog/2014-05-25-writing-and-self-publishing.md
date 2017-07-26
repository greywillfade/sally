---
title: Writing and self-publishing an ebook – a first-timer’s view
author: Sally
type: post
date: 2014-05-25T10:28:10+00:00
url: /blog/2014/05/25/writing-and-self-publishing/
categories:
  - Writing
tags:
  - atomic documentation
  - calibre
  - ebook
  - gumroad

---
I’ve recently done something that I’ve been considering for a while, which is to write and publish an ebook. The result of this was <a title="Atomic Documentation" href="http://recordssoundthesame.com/atomic-documentation/" target="_blank">Atomic Documentation</a>, and I released it last week. As with a lot of things that I do, part of it was to overcome a fear. I frequently find myself being guilty of wanting to write something or make something, but then bail on actually putting it out there. A book is a good challenge to set for those kind of issues.

With what we release on the internet, we can ship it quickly, patch it, make excuses, and come back to bits later. With a book, you can’t do that. Well, not very easily. If you find a typo, or want to add something, or realise that something that you wrote was really quite idiotic, you can’t take it back. Even if you reissue a new file for future customers, you know that X people have already seen your mistake. I had all of these worries pre-release: “What if people think that it’s poorly written, or boring, or people think that I’m wrong, or that it doesn’t say anything much at all?”. “What if people on the internet are _mean to me_?” I had several points where I nearly didn’t go through with it, but I’m a big believer in things not happening unless you try, and with every new paragraph I wrote there was more to waste if I gave up and threw it all away. So I got there, and I did it, and now I want to share my learnings from the whole process.

## Background

I started off thinking about this in the summer of last year, but not in any kind of tangible sense. Having set out freelancing, I’d read in a number of places that it was good to be able to have a source of ‘passive income’ &#8211; one where you’re earning even when you’re not doing your usual work. Selling copies of a book when you’re asleep or working on other projects would be one such example. I was also interested in trying to write something in a longer format than usual. As you can probably tell from my blog entries, my writing usually ends up being pretty lengthy and I’d written articles before (plus tried to contact a magazine about an early version of my thoughts in the book before I’d really formalised them), but an ebook is a whole other monster.

I tweeted about this at the time, and ended up emailing <a title="John Whish on Twitter" href="https://twitter.com/aliaspooryorik" target="_blank">John Whish</a> for advice. He gave me some good thoughts, but after that I put it aside and thought no more about it for a while.

Having started thinking about the concept of documentation more and more due to the work I was doing and the people I was working with, I decided to finally put fingers to keyboard and set out to write a draft blog post whilst on a train one day towards the end of the year. As the content grew, I hesitated every time I referred to “this post” within the text, eventually optimistically changing it to “this article” before I later finally caved and wrote “this book”. It was defined. I was writing a book. The writing continued in a somewhat fragmented way, depending on whether I had space to get my laptop out on trains, and how grumpy I was.

The end of the year came round, and with it New Year&#8217;s Eve. I’m not one for new years resolutions as such. I don’t like focusing on bad things and fixing them, but instead I like to set out a series of things that would make me happy if I did them in the months ahead. Things like “get a kitten” and “go skiing” are ticked off. “Buy THE Gibson SG” isn’t yet, but there’s still time. One of the wants on my list was “finish my book”. I didn’t want it to be yet another project to start and then get jittery about sharing, plus I really wanted to throw out my thoughts on the subject because it was something that I was seeing problems with again and again. I’m really glad that I carried it through, and over the last few months I’ve made a big effort to dedicating proper time to it around my other work.

Due to the insecurities that I had, part of me thought that I should release the book for free. If it was free and it was rubbish, then nobody can say horrible things, right? I pondered this for a while, but eventually I decided on charging a small fee. I’d spent a huge amount of time on this book, and more than anything I didn’t want to de-value its worth to myself by thinking of it as free and half-decent. In hindsight I really should have done some time tracking so that I could analyse the time I’d spent on it, but considering I’d been writing it before I knew what was going to happen, this didn’t occur to me until much later down the line.

## Process

Throughout the process I learnt some new things, so here they are, both for my own future reference and for anyone who may be thinking of doing something similar.

### Writing

I initially started writing in a combination of Google Docs and Notes on my Mac while I was on the train. I also kept snippets of thoughts in Google Keep. It was only once I’d progressed from “blog post” to “article” (and eventually “book”) mentally that I wanted something a bit less document-y, and more representative of how I pictured it eventually looking, so I moved to the writing format that I’m most familiar with &#8211; HTML. This may sound extremely unnecessary, but it gave me a bit of encouragement when I could style it to look a bit more &#8216;booky&#8217; than a big long document. I also knew I wouldn’t be dealing with any horrible hidden characters or dodgy formatting once it was transferred to the web. For areas that I hadn’t finalised, I used class=“todo”, which gave me an easy way of searching the code, plus using a background colour of yellow made it easy to visually spot areas that needed work.

Around this time, Five Simple Steps very sadly (temporarily) closed its doors, but not without leaving the world with a great resource in the form of <a title="creating-ebooks.com" href="http://creating-ebooks.com/" target="_blank">creating-ebooks.com</a>. This was invaluable for helping me learn about the process of making ebooks. I grabbed the files and immediately created an initial prototype, and proceeded to populate it with my work in progress HTML. This helped me to get a feel for how it would all hang together as a real book. Whilst the FSS kit is great and is a starting point I’d recommend to anyone, there are a few things that I’ve found that it doesn’t cover, which are included below under formatting. There was also a great resource on last year&#8217;s 24Ways, &#8216;<a title="How to write a book" href="http://24ways.org/2013/how-to-write-a-book/" target="_blank">How to write a book</a>&#8216; by Jonathan Snook, which also has some good tips.

The issues that I had with writing straight in HTML centred around me not having a single manuscript as all my writing was done in individual XHTML (epub format) files from this point. It’s much harder to do simple things like spell check your work like this, depending on your editor. It’s also easy to get hung up on the presentation &#8211; once I’d started to make it look ‘pretty’ I paused my writing for a while so that I could play with the stylesheets and test it on various devices.

As well as writing, I wanted to check in with all of the people that I&#8217;d quoted, both to cover myself from a copyright perspective as well as just to be nice and check that they were ok with it. I particularly wanted to get Brad Frost&#8217;s thoughts, because the way of working in the book (as well as the title) is heavily influenced by his <a title="Atomic Design" href="http://bradfrostweb.com/blog/post/atomic-web-design/" target="_blank">Atomic Design</a> process. In the end I contacted a few authors, as well as O&#8217;Reilly and A List Apart, and everyone was incredibly nice as well as punctual in getting back to me.

### Formatting it

**Paragraphs**

Once I transferred over my initial HTML and styles and attempted to merge them with the Five Simple Steps template, I realised that I wasn&#8217;t keen on some things. The FSS one has some quirks, such as littering the markup with:

    <p class="break"><br /></p>

I got quite far following this format, but there came a point where I couldn&#8217;t bear to do it any more. I&#8217;m not quite sure why it does this &#8211; obviously something around forcing paragraph breaks in some readers &#8211; but I found that spacing them using CSS worked just as well on the most part with the majority of readers. I stripped all of these out of my markup because I personally find it messy.

**XHTML**

Just like when I started out with making websites, I started unzipping other ebooks to have a poke around their styles to see how they were achieving certain things. On finding something that I quite liked, I &#8216;borrowed&#8217; one idea, however this bit me on the arse because it involved a <header> element, and I&#8217;d totally forgotten that this was wildly futuristic for the majority of basic ebook readers. I eventually went back and reverted to simple classes and IDs.

**Links**

I&#8217;d styled the links littered throughout the book, or so I&#8217;d thought. Not so! This was another gap in the Five Simple Steps template, and one which I stumbled across through reading some assorted tips for ebooks. When styling your links, as well as the standard &#8216;color&#8217; declaration, you also want to use &#8216;-webkit-text-fill-color&#8217;, as follows:

    a {
       -webkit-text-fill-color: awesomecolour;
       color: awesomecolour;
    }
    

**Fighting reader software**

Other things I found were that some readers won&#8217;t care about background colours. There may be a similar workaround for this, but I never found one. Some won&#8217;t care about bolding, or italics. Others will totally overrule your decision to space out paragraphs (even if you include extra <p> tags), or otherwise. You _may_ have to litter your CSS with !importants. I know, I know. Test on as many devices as you can, and see how belligerent some of them are vs how desperate you are to make your book look beautiful. Many will refuse to acknowledge your commands because they place greater emphasis on user preferences, so accept that there will be some battles you do not win.

![ebook variants][1]

<p class="caption">
  Just a few variants of the book, using different devices and ebook readers.
</p>

**Epub vs mobi**

When you come to create different file types (see **Putting it all together** below), consider that mobi files are a lot less capable of using &#8216;fancy&#8217; CSS. You&#8217;re pretty much limited to italics, size, and text colour (no link colours here!). If you&#8217;re designing a layout, bear this in mind before you find out the hard way later.

**Fonts**

You can include fonts in the package and reference these in your CSS, and more space-age readers will _probably_ agree to bow to your wishes. Many others won&#8217;t though, so again bear this in mind when you&#8217;re painstakingly agonising over your spacing.

**Hyphens**

Once I started testing across devices, I also realised that I really didn&#8217;t like how a lot of them were splitting up my text. Particularly for headers, it didn&#8217;t make sense for them to have words split between lines with hyphens. I again did some searching, and you can turn this off with:

    h1, h2, h3, blockquote, #toc {
       -webkit-hyphens: none;
       adobe-hyphenate: none;
       -moz-hyphens: none;
       hyphens: none;
    }

(where you can obviously de-hyphenate whatever makes sense for your book).

**Keeping the typography nerds happy**

I appreciate typography. I like it when clever people make words look pretty. I don&#8217;t know the faintest thing about the proper rules, but over the years I&#8217;ve come to learn that people get cross when you use straight quotes when you should be using curly ones. In order to keep these people happy, I went through and made sure that I tried to get all of the straight ones and fix them into &rsquo;s and &rdquo;s etc. This again wasn&#8217;t helped by writing directly into an HTML editor.

**Branding**

Just like I know barely anything about typography, I also know extremely little about design. I do however like to try. I have a sense of ownership over things that I make, and I like to use these things as an opportunity to _try_ to get better. I therefore designed the cover and the interior of the book, which is why it probably looks a bit off to anyone who actually does this kind of stuff for a living.

Speaking of covers, according to various internet sources your cover image can be larger than mine was, however on trying this I was unable to get it to show up in some readers that I tested with. I eventually stuck with the FSS template size, which shows up as rather small in many readers, but it looks ok. The final image I made was 1276px x 1890px. Other purchased books that I own have covers of 1024px x 1658px, 743px x 1144px etc. You can use the epub zip/unzip software discussed below to have a look at what other people are doing.

### Editing it

Get a good editor. I know that I am guilty of too many commas and writing lots of things that don&#8217;t actually make sense. I had two great editors &#8211; one in the industry and one not. When the one who wasn’t in the industry was able to grasp the concept, I felt more reassured that it would come across ok. One of my fears was that I&#8217;d come across as being too &#8216;pro-documentation-for-the-sake-of-it&#8217; when the reality was quite the opposite, and another was that it just wouldn&#8217;t make sense. Knowing that at least two people didn’t think I was a total idiot helped me have confidence in what I was putting out there. They also obviously helped to remove commas, spot typos, and re-write a few bits.

### Putting it all together

Once you&#8217;ve written and styled your book you&#8217;ll need to convert it from individual XHTML files into a single epub package. The epub conversion script linked to in the Five Simple Steps guide is outdated and didn’t work on my Mac. There is a forum thread linked to from the page it apparently used to live at, but it’s a bit messy delving through. At the time of writing the <a href="http://www.mobileread.com/forums/showthread.php?t=55681&page=6" target="_blank">forum thread is here</a> with a new script located <a href="http://www.mobileread.com/forums/attachment.php?attachmentid=95318&d=1351859908" target="_blank">here</a> if you want to go directly. I&#8217;m using ePub Zip-Unzip 2.1.1 at the time of writing. (1.0.3 is linked in the FSS guide)

This was a great tool, however after the hundredth time of saving a change, deleting the old file from iBooks on my Mac, running the packager, opening the new file, I wish I’d built some automation into this process. It’s definitely something I would look to do next time.

At this point epub was covered, but mobi and PDF needed conversion. I used Calibre, as recommended by seemingly everyone including FSS, and it’s absolutely perfect for what you need. The bit I floundered with at first was the settings. When you come to convert a file, there are a LOT of options. I’d recommend playing around with these (I made a lot of tests), and also opening up other files you own and comparing yours to theirs. The settings that I ended up using were as follows:

**PDF**

  * I used the epub version to convert to PDF, as the mobi file had less styling.
  * Minimum line height: 150%
  * Margins &#8211; set to 40pt (top, bottom), 45pt (left, right)
  * Page setup &#8211; Input and output profiles &#8211; tablet (output), default (input)
  * Default font size &#8211; 14pt
  * Table of contents &#8211; there&#8217;s a setting about linking these, which I changed to be a higher number so as to make sure my table of contents was linked up properly.

**mobi**

  * This shared the same markup as the epub, but I created a different epub to convert to mobi that used a different stylesheet to counter the issues mentioned above.
  * I ended up leaving all settings as they were apart from setting the output to be Kindle Fire, and to increase the number  of table of content links as above.

### Selling it

In the aftermath of the Five Simple Steps (temporary) shut down, I looked to see what some of the authors had used to sell their books. I found that people were using things like Shopify, or other options that required a monthly subscription. This didn’t work for me, as I very much doubted that I’d be recouping the monthly costs with my meagre sales. I thought about building something directly, but then realised that I’d probably spend far more time doing so. I also didn&#8217;t want to sell through any of the major retailers like Amazon, both due to my insecurities and because I&#8217;d lose a huge cut and wasn&#8217;t sure that I&#8217;d benefit from their marketplace. Finally, FSS re-opened under new ownership, and one of my editors suggested that I should contact them and see whether they&#8217;d publish it. By that point my book was essentially done, and after coming all that way on my own I didn&#8217;t really want to start changing the content to fit the FSS five chapter format, so I didn&#8217;t get in touch.

In the end, through the course of my Googling I stumbled across <a title="Gumroad" href="http://gumroad.com" target="_blank">Gumroad</a>. It looked pretty good in terms of features, and after a bit of research into that and other competitors such as <a title="Sellfy" href="https://sellfy.com/" target="_blank">Sellfy</a>, I decided to give it a go. There was no on-going subscription, and whilst you do end up paying out a fair bit in fees, it still wouldn’t come close to the value of my time to build it myself. I’d initially thought to sell the book for £2.50 based on other short book prices, but Gumtree’s setup is heavily US-based and it made more sense to do it in dollars as that’s what they actually charge in. I went for $5 in the end to cater for fluctuating exchange rates, which a few people called out on Twitter as being too low, but for the length of book and my lack of history as an author I thought it was pretty fair.

So far so good with Gumroad. On the first day I had a couple of emails from people who had problems with the download link, and one who reported very slow download speeds. I reported all issues to the Gumroad support people, although the quality of the responses varied. I also had one person get in touch not wanting to enter his credit card details into a site he hadn’t heard of, which was fair enough, so he paid directly through Paypal and I sent over the file.

## Results so far

To give people who may be thinking about this a proper idea, I want to share all my figures so far. I released the book on the 21st May, and on that day I had 24 downloads. This was far more than I’d expected to be honest, and I think it was primarily due to a lot of kind people retweeting and favouriting my announcement &#8211; these kind of numbers are high for me!

<blockquote class="twitter-tweet" width="500">
  <p lang="en" dir="ltr">
    I WROTE A BOOK. A whole (small) book, about project documentation and communication. You can find out about it here: <a href="http://t.co/7zwi9ek7eb">http://t.co/7zwi9ek7eb</a>
  </p>
  
  <p>
    &mdash; Sally Jenkinson (@sjenkinson) <a href="https://twitter.com/sjenkinson/status/468749246842552321">May 20, 2014</a>
  </p>
</blockquote>



I haven&#8217;t done any other kind of promo at all since that initial tweet, mainly because I don&#8217;t want to come across as a pushy seller who is constantly spamming social networks about themselves. I&#8217;ll do some more proper promo in the upcoming weeks and months I&#8217;m sure, because I&#8217;m not remotely well known, and I doubt I will have any kind of on-going sales unless I happen to mention the book.

My sales currently stand at 47 through Gumroad, and one direct (see above). With Gumroad fees taken off (not including any taxes to pay or PayPal withdrawal fees), I currently stand to make $211.50 (£<span style="color: #212121;">125.66</span>) from the Gumroad sales (note that the image totals don&#8217;t have fees removed) and have £2.61 in my PayPal account from the outside transaction. This doesn’t come near covering the amount of time taken to write it, but I’m not doing this to get rich!

![Gumroad analytics][2]

<p class="caption">
  Gumroad analytics dashboard. Mmm data.
</p>

I got more people coming to my site on the day of the announcement than I ever had before. I don’t usually have very high traffic. I blog sporadically, and when I do get spikes it’s usually because I’ve felt like enough people may be interested and have tweeted about it. Quite often I post things and don’t tweet about it, again because of The Fear.

The business people in you will be asking “_so what about the leads from all these views?_”. Despite a lot of people coming to my site, I haven’t yet had an enquiry because of the book. As part of [my consultancy work][3] I sometimes help people with their processes and how they approach projects, and documentation is part of this, but I don’t think that the subject matter will cause people to go “_YES. I simply must hire her!_” as it’s a very niche part of process transformation. The project work that I do (technical research, requirements gathering, planning, solutions architecture etc) is also very different, so I doubt that’ll have a big impact. That said, my enquiries are always very time-specific and whilst consultancy is more ad-hoc, the project stuff is because people have specific needs at a particular time. So you never know &#8211; I may have caught someone’s eye for the future, even if their needs aren’t immediate. I&#8217;ll update if so!

## So would I do it again?

Yes, I think so, depending on whether I can think of anything else I care enough about to write about. I don&#8217;t think it&#8217;d be the sort of thing I&#8217;d deliberately take time off work to do unless I somehow gain a much larger interested audience, but as a side project outside of work I think it was a pretty fun exercise. If anyone&#8217;s thinking about it I&#8217;d definitely recommend it, as it&#8217;s all pretty easy to do once you get your head around.

If you&#8217;d like to buy the book, you can <a title="Atomic Documentation on Gumroad" href="https://gum.co/atomicdocumentation" target="_blank">here</a>, or if you&#8217;d like to ask me any other questions about all of this please send me an email &#8211; sally at recordssoundthesame dot com.

 [1]: http://recordssoundthesame.com/wp-content/uploads/2014/05/bookscreengrabs.jpg
 [2]: http://recordssoundthesame.com/wp-content/uploads/2014/05/gumroad-article.jpg
 [3]: http://recordssoundthesame.com/work/ "My consultancy work"