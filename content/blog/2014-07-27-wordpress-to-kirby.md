---
title: WordPress to Kirby
author: Sally
type: post
date: 2014-07-27T17:16:29+00:00
url: /blog/2014/07/27/wordpress-to-kirby/
categories:
  - Pet projects
tags:
  - kirby
  - markdown
  - migration
  - wordpress
  - XML

---
The other week, my friend <a title="Paul Swain" href="http://iwearglasses.net" target="_blank">Paul Swain</a> happened to mention that he was finally getting round to transferring some of his old blog posts over to his current site. Paul used to have a WordPress-based site, but switched over to Kirby when he redesigned it a while back.

His situation struck a bit of a chord with me &#8211; my first blog-based site had been built using ColdFusion and the BlogCFC component, but at one point during a redesign I’d switched to WordPress. I’m currently in the “I hate everything” phase again and am considering changing the whole platform once more, this time potentially to something more simple and markdown-based because I really don&#8217;t need a full CMS.

One of the considerations around any blog move, as with any platform change, is that of data migration. When switching from my original blog, I didn’t have that many posts. The main challenge for me was to re-do the header images for each, as I’d changed the dimensions in the redesign. I ended up manually creating new posts and delving into the database to tweak comment information (including reinstating the original timestamps etc), which was partly due to my unfamiliarity at the time with the WordPress schema and way the files were structured. Despite the lack of posts, it was still pretty time consuming and boring work.

The same issues do and don’t apply when it comes to static sites. There is still work involved in migration, but for the most part the format being migrated to is much more transparent than something like the WordPress database. Here’s Paul’s boilerplate for his post structure, as an example:

&nbsp;

<pre>Title: Title of the post
----
Date: mm/dd/yyyy
----
Category: Comma, Separated, List
----
Summary: A short description, used to summarise the post in the blog listings.
----
Tags: Comma, Separated, List
----
Text: The main body of the post.</pre>

&nbsp;

Each of his blog posts are created in a separate file, and if you look at a **subset** of his data export you can see why he had taken a while to get round to the migration:

[![Paul Swain's website content export][1]][1]

That’s just a selection of the information held about one post, and doesn&#8217;t include all of the general fluff at the start of the file. Sure, XML is human-readable, and the information’s all there, but the cognitive load of searching through everything, as well as the effort involved in creating a new file, pasting in each field, and then checking you’ve not missed anything isn’t fun.

You know what is fun? Parsing XML and outputting all of this automatically!

## Save the content

The fact that a load of Paul’s content had died in the move didn’t sit well with me. As I wrote about in my earlier post about [digital preservation][2], I’m not a fan of things being there one day and gone the next. Regardless of whether he’d redirected the old links using 301s, the content just wasn’t there any more. He probably would have got round to reinstating everything eventually, but I wanted to help him.

To this end, I created a very scrappy script to read his export file, grab the information, and to output a set of new, individual .txt files for each post, using the structure in his boilerplate example and a sample that he provided me. This went through a couple of false starts. In my eagerness to convert all of the horrible WordPress tags into beautiful HTML, and doing things like playing with DOMDocument in order to strip out fixed-width dimensions, I forgot that actually, I shouldn’t be creating HTML at all. Whilst Kirby does allow the use of HTML tags within the main body of text as well as markdown, this wasn’t how Paul wrote, and I wanted to maintain that consistency. At this point I was secretly slightly relieved, as regular expressions had been hurting my brain.

I did however have to do some conversion. After this kerfuffle I realised a) that this conversion malarkey can have a lot of different scenarios if you try to cover them all from scratch b) my regex is _so_ not good enough c) I&#8217;m lazy. In the end, I looked for a third part HTML to Markdown convertor to speed things up. I used <a href="https://github.com/nickcernis/html-to-markdown" target="_blank">HTML to Markdown for PHP</a> by Nick Cernis, which I then proceeded to make a few minor changes to in order to output different formatting. The way Paul was using it, Kirby doesn’t follow the typical markdown format for things like anchors and images. I therefore amended some of the HTML to Markdown source, with things like the following:

_(Why PHP, some smart arse will ask? Well, of course I&#8217;m telling myself that I&#8217;ll build it into a proper tool one day (I won&#8217;t), and PHP makes sense if I want to integrate it into the WP back-end)._

Original input:

<pre>&lt;a href="http://sallyjenkinson.co.uk" title="Sally Jenkinson's website"&gt;Sally Jenkinson&lt;/a&gt;
</pre>

Default conversion makes this:

<pre>[Sally Jenkinson](http://sallyjenkinson.co.uk "Sally Jenkinson's website")
</pre>

Which I then changed to:

<pre>(link: http://sallyjenkinson.co.uk text: Sally Jenkinson popup: true title: Sally Jenkinson's website)
</pre>

Paul was going through some of the posts and updating content where necessary, and as you can see from his boilerplate there is a summary, which is an entirely new description rather than a substring of the main content. He therefore still had some tweaks to make in each file, and I believe he&#8217;s re-thinking things like tagging and categorisation. Still, I think the conversion worked pretty well overall, saved him a lot of time, and was pretty accurate. Certain things are still not perfect, but it&#8217;s all a much better starting point for amends. Here&#8217;s a converted file, for comparison:

[![Kirby version of Paul's export][3]][3]

## The small print

It has served its purpose and I&#8217;m not going to be maintaining it (unless I need to bring it back to use myself), but in case it&#8217;s is vaguely useful to anyone else I&#8217;ve <a title="WordPress XML to Kirby on GitHub" href="https://github.com/greywillfade/wpxml-to-kirby" target="_blank">shoved it on GitHub</a>. Disclaimers! With the exception of the third party class it&#8217;s a single file script, with no encapsulation, no error handling, hardcoded filenames, and all the things you shouldn&#8217;t do. If you&#8217;ve stumbled across this looking to learn, _please_ don&#8217;t use this as any kind of best practice example! If you hadn&#8217;t gathered, it was intended for a single run, and a very particular use case of converting _Paul&#8217;s_ content to _Paul&#8217;s_ way of working. This won&#8217;t necessarily be how others structure their files, and may not work out of the box for you.

<p class="p1">
  There are two file-based elements towards the top of the index file &#8211; $importfile and $exportdir. You should reference the filename of your XML in $importfile, and (optionally &#8211; you can keep it as the root) the directory you want your new files to be generated in with $exportdir. You&#8217;ll need to create the directory by yourself before running the script (files will be generated), and you should make sure the directory is writeable. I’m running locally and to keep it tidy I wrote into a new directory that I zipped up and emailed over to Paul. Apart from the file, the only other output is a really simple log to detail when the files were written, which gets showed totally unformatted in the browser.
</p>

<p class="p1">
  If your project needs this kind of functionality on a production server, or will be generating files as a service&#8230; er, don&#8217;t use this! You&#8217;ll need to revisit all of the issues I mentioned above, plus tightening up security, creating cleanup tasks, and you&#8217;d be much better writing something half decent! However, if you&#8217;re just looking for a conversion aid, knock yourself out.
</p>

 [1]: http://recordssoundthesame.com/wp-content/uploads/2014/07/swainexport.jpg
 [2]: http://recordssoundthesame.com/blog/2014/04/24/digital-preservation/ "Digital preservation"
 [3]: http://recordssoundthesame.com/wp-content/uploads/2014/07/swainexport-kirby.jpg