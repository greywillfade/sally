---
title: FreeAgent invoice source code
author: Sally
type: post
date: 2014-01-28T19:09:55+00:00
url: /blog/2014/01/28/freeagent-source-code/
categories:
  - Tips
tags:
  - accounting
  - freeagent
  - github
  - invoices
  - template

---
When starting out with your own business, getting the accounting side of things right can be a big headache. I initially started out using some very basic spreadsheets and pretty InDesign invoices, but as I&#8217;ve documented in previous posts I eventually migrated to FreeAgent, which has been absolutely brilliant for me.

### Custom invoice templates

FreeAgent, amongst being all-round useful, allows you to customise your invoices with very basic CSS skills. They offer several pre-built templates, but I wanted to be sending something which designed up nicely, and matched my brand a bit better than the defaults.

I based my template on the Horizon standard template, so 95% of the code is attributed to that. All I’ve done is a little bit of a colouring in-job and just amending little details, but I wanted to share this in case it’s of use to anyone else. It&#8217;s barely any different from the standard template so don&#8217;t expect anything radical, but I think it works a little bit better.

Instructions for implementing custom invoice templates are available here: [CSS Guide for invoice templates][1]

To be able to play around with your theming you can amend the CSS directly within the editor in FreeAgent, however this obviously comes with the usual warnings that things can very easily be lost or go wrong if you only have your code here. For me this is also a slow way to try ideas out. Instead, FreeAgent provide the source for all standard themes as well as a dummy HTML page within their DevKit, which is available here: [Invoice DevKit][2]. You can obviously then mess around locally to your heart&#8217;s content, and put it in some proper version control.

### My version&#8217;s source code

If you want to steal and/or use my version as a starting point, you can either: 1) download it as a standalone set of files and run/tweak it locally first 2) grab the CSS and put that straight into FreeAgent’s theme editor 3) grab the dev kit and add my CSS/images as an addition to the other themes.

You could also use it as a basis for your own invoices if you&#8217;re using another accountancy package (but you&#8217;ll obviously have to re-map the CSS to whatever markup that generates), or doing things a bit more manually. I’ve put the code on my GitHub ([FreeAgent Invoice][3]) along with some extra notes on implementation within the README. Do with it what you will, although you should probably remember to take out my name, and put your details in there instead of the dummy information!

<p class="contentc">
  <img alt="Freeagent invoice" src="http://recordssoundthesame.com/wp-content/uploads/2014/01/freeagent2-cut.jpg" />
</p>

 [1]: http://www.freeagent.com/support/kb/invoicing/css-guide-for-invoice-templates "CSS guide for invoice templates"
 [2]: http://www.freeagent.com/support/kb/invoicing/invoice-devkit "Invoice DevKit"
 [3]: https://github.com/greywillfade/freeagent-invoice