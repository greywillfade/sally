---
title: Using spreadsheets and Google Translate
author: Sally
type: post
date: 2015-11-05T17:48:50+00:00
url: /blog/2015/11/05/using-spreadsheets-and-google-translate/
categories:
  - Tips

---
<p class="lede">
  In one of those &#8216;blog about it so I don&#8217;t forget later&#8217; moments, today I happened to discover something that shouldn&#8217;t have surprised me, but which could be pretty useful in the right circumstances &#8211; the ability to introduce live Google translations into a spreadsheet.
</p>

I&#8217;m currently working on a project which involves stakeholders from France and Germany as well as the UK. This afternoon I was sent over a spreadsheet of feedback in xslx format, all in German, and considered the best way to make this understandable to my teammates. I have a small amount of (mainly skiing and food-related) German ability, but ecommerce and technical terms were another matter. I needed it translating.

My first port of call was the <a href="https://translate.google.com/" target="_blank">Google Translate</a> website, where I hoped to find some kind of upload feature. No such luck. I tried pasting in the whole spreadsheet, which unsurprisingly returned a huge mess of words.

Taking it a step back, I headed to Google Drive, where I imported my Excel file and turned it into a Google Sheet. At this point I was hoping for a magical translate button in one of the menus, but again no such luck.

## The solution

At this point I came across the reference for the aptly named <a href="https://support.google.com/docs/answer/3093331?hl=en" target="_blank">GOOGLETRANSLATE</a> function within Google Sheets, which did almost exactly what I needed. It&#8217;s been around for ages, but is new to me, and seems like it&#8217;s the kind of thing that you won&#8217;t know about unless you look specifically for it. The formula is as follows:

<pre>GOOGLETRANSLATE(text, [source_language, target_language])</pre>

Where `text` is either a string (e.g. `"Spreadsheets are fun!"`) or a (single) cell reference (e.g. `A1`), and source and target languages are the two character ISO <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank">language code</a>. It is possible to use `auto` in place of the source language country code if you&#8217;d like to have the source auto-detected. 

For example, if you&#8217;d like to translate cell A1 from French to English, paste the below into a new cell.

<pre>=GOOGLETRANSLATE(A1,"fr","en")</pre>

The way that I used this was to add a new column next to the source columns, paste in the formula at the top, drag it down to cover all rows in the column, and then hide the original version. You&#8217;ll end up with something like this:<figure> 

[![Google translate and spreadsheets][1]][1]<figcaption>A snippet of the translated spreadsheet</figcaption></figure> 

It would be great if you were somehow able to apply it to the whole sheet, but until that happens this is a big improvement over translating each individual cell. Hopefully this will help someone else in a similar situation!

 [1]: http://recordssoundthesame.com/wp-content/uploads/2015/11/translate.png