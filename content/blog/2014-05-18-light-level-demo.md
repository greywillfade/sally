---
title: Light-level demo
author: Sally
type: post
date: 2014-05-18T22:33:53+00:00
url: /blog/2014/05/18/light-level-demo/
categories:
  - Conference
tags:
  - css
  - demo
  - light-level
  - luminosity
  - spec

---
As part of my fast-approaching presentation at Responsive Day Out 2 I&#8217;m (spoilers!) going to be talking very briefly about the upcoming light-level (formerly luminosity) media query, amongst other much more important things like Batman.

The talk is only 15-20 minutes long so there&#8217;s only so much detail that I can go into with everything, and I wanted to put a bit more information and context in this post.

Please note that since I started writing my talk this had all changed (as is the fun of draft specs). As mentioned above, it was previously called &#8216;Luminosity&#8217; and you can find some good resources out there under that name. The previous values for the media query also had a slight difference. For the most up to date information, please see <a title="Media Queries level 4" href="http://dev.w3.org/csswg/mediaqueries4/#light-level" target="_blank">the spec itself</a>, and check that you&#8217;re viewing the latest draft.

## What is light-level / luminosity?

Media queries at the moment have been great for letting us tailor our content to the devices that people are looking at it on. We can detect widths, heights, orientation, aspect-ratio and resolution, to things like colour and whether it’s a monochrome device. Prior to this we more commonly used them for things like serving up different stylesheets for printing.

Light-level, along with its friends Pointer, Hover, Scripting, and others, allow us to extend our customisation of the CSS that we deliver based on these additional detection methods. In the case of light-level, and in the spec&#8217;s own words:

> &#8220;The light-level media feature is used to query about the ambient light-level in which the device is used, to allow the author to adjust style of the document in response.&#8221;
> 
> &#8211; <http://dev.w3.org/csswg/mediaqueries4/#light-level>

This means that we can help to adapt the content to really bright situations like direct sunlight, or if someone&#8217;s reading in bed. It&#8217;ll act the same way as a sat nav display does when you go through tunnels. At present the proposal is for three possible values &#8211; &#8216;dim&#8217;, &#8216;normal&#8217;, and &#8216;washed&#8217; (a change from the previous value of &#8216;bright&#8217;), each of which would correspond to whatever definition the device gives it in terms of light units (lux). Devices are likely to have different definitions of the pairing of light-level values to units based on the automatic brightness of the screen, different screen technologies, and differences in <a title="Calibrations" href="http://nightlyre.deviantart.com/art/ME3-Garrus-Cosplay-Brushing-up-on-skills-377703605" target="_blank">calibrations</a>.

It would be implemented something like this (taken from the spec page):

<pre>@media (light-level: normal) {
  p { background: url("texture.jpg"); color: #333 }
}
@media (light-level: dim) {
  p { background: #222; color: #ccc }
}
@media (light-level: washed) {
  p { background: white; color: black; font-size: 2em; }
}

</pre>

## Why is this interesting?

The more we view technology as being able to help us improve experiences, the better. There is huge potential for this to be abused (we&#8217;ll come on to that with the token &#8216;disco mode&#8217; demo), however the idea of experiences that are totally fluid, and which don&#8217;t have a single &#8216;correct&#8217; way for our content to be viewed, is one that fascinates me. I&#8217;m interested in it on that level, rather than the fact that I&#8217;ll be able to better keep up with my twitter feed the next time I&#8217;m on a beach. Our perception of how a website should look has changed so much in recent years because of the diversification of devices and browsers and having to support such a large ecosystem. I find the potential for even more variants, as well as the knock-on effect to documentation and our creation processes, a very interesting challenge.

## Demo time!

Ok, first up you&#8217;re going to need the following:

1. A device equipped with a suitable light sensor. I&#8217;m using a Nexus 5/7.
  
2. A browser that supports the JavaScript [Ambient Light API][1]. I&#8217;m using Firefox Mobile.

Wait. JavaScript what now? Where&#8217;s my media query?!

As the media query is still in draft format, it hasn&#8217;t yet been implemented by any of the major browser vendors. But it&#8217;s ok, because we can get an idea of how it may work by using something else half-working &#8211; in this case a JavaScript API. This in itself isn&#8217;t widely implemented either (hooray for cutting edge demos!), but the effect will be pretty much the same thing as we&#8217;d have if the media queries were here.

For those of you without access to such things, I&#8217;ve taken the liberty of making a short video for you to see the effect. Here you go:

<div class="videocontain">
</div>

The rest of you can go and play with the demo page, [found here][2]. Don&#8217;t forget step 2 and to open it in a browser with support, or it won&#8217;t work. May you all walk around with your phones in hand, pretending to be in Star Trek.

The code itself is very simple and you can pretty much get it from the API link above, but it&#8217;s [here on GitHub][3] if anyone would like to grab it.

### Disco mode

Another theme of my talk is responsibility, and as such I will finish off this post and leave you with the classic &#8216;how not to use this&#8217; over-the-top example. Engage disco mode!

<div class="videocontain">
</div>

 [1]: http://www.w3.org/TR/ambient-light/ "Ambient Light API"
 [2]: https://sallylait.com/labs/fauxluminosity/
 [3]: https://github.com/greywillfade/light-level