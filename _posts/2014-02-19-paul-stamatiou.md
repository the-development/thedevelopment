---
layout: post
firstname: Paul
lastname: Stamatiou
position: Designer
company: Twitter
companyurl: http://twitter.com/
img: paulstamatiou.jpg
screenshot: paulstamatiou.jpg
twitter: stammy
website: http://paulstamatiou.com
date:   2014-02-19 11:00:00
categories: posts
---

## Let's get to know you first. Tell us about yourself.

Hi! I'm Paul Stamatiou but at this point I think people more people know me by my Twitter handle, Stammy. I'm a designer at Twitter in San Francisco. Before joining Twitter I co-founded three startups spanning over five years. It was with those startups where I was able hone my design and development skills. Before that I went to Georgia Tech in Atlanta where I studied computational media: a hybrid CS/design degree of sorts.

Most of my day at work is spent designing in Photoshop for mobile. I tend to design for Android first and then iOS for every project, having recently become an [Android addict myself](http://paulstamatiou.com/android-is-better/).

## Cool, so what's the story behind your website and its design?

I have been blogging since 2005. It's hard to believe it has been that long! It started out as curiosity about WordPress. A friend in college got me into Gentoo Linux and then PHP. I installed WordPress on my Mac Mini to tinker. Then I registered a domain and just put a few posts online.

It was when one of my blog posts got a lot of traffic (a guide about setting up BitTorrent) that I became more serious about my site. I kept writing helpful technology-related guides and kept getting traffic - so much so that it killed the hard drive in my Mac Mini in my dorm room and I had to switch to a real host.

Fast-forward to 2014 and I have probably redesigned my site some 10+ times and published over 1,000 posts. Through my redesigns I've continually simplified the site. It has been a long time since I had a sidebar filled with ads and affiliate banners!

My most recent redesign was  about bigger type and images in my posts. I wanted images to break out of the content and become a larger part of the story. Getting a nice camera was one of the best things I did for my site. It allowed me to post sharp, high quality pictures to go along with whatever I was talking about or reviewing.

## What part of your website is your favourite, and why?

That would have to be the [photos section](http://paulstamatiou.com/photos/). It just started out as a place to post single photos here and there but has since evolved into a place where I want to put photo stories -- collections of photos along with text telling the story of the moment, day, trip or whatever it may be.

I used to share [camera metadata](http://dribbble.com/shots/836966-Finalized-Photo-page/attachments/87570) with each photo: Camera, post-processing software used, aperture, shutter speed and ISO. But I quickly realized that was taking away from the story I wanted to tell. It's with that thought that I have been slowly changing my photos section into something more substantial to share experiences.

## Is there anything you wish you knew when you first started building your website?

This is a hard one... I was going to say keeping my URL structure the same because once you change it you have to support it forever via redirects and that becomes very annoying.

I started my site when I didn't really know anything about web development. I couldn't even set a background image with CSS without Googling. I learned through years of tinkering on it and I'm grateful for the opportunties my blog has given me by becoming a platform for sharing my thoughts with many others.

I wouldn't change a thing. My blog has been a great learning tool and playground.

## Technologies, languages, frameworks, or libraries?

I have been using Jekyll for my site since 2010 and haven't looked back. But when I expanded my photos section I realized I was being limited and ended up using a second Jekyll setup to manage my photos section. So yes, I have a Jekyll inside of a Jekyll on my site. I previously had a custom Jekyll fork to manage the separate sections of my site but I hated having to manually update the gem code to get new Jekyll features.

In addition I use Sass and Coffeescript along with Grunt to manage everything. I also use two Grunt plugins of note: combine-media-queries and grunt-responsive-images. The first reduces generated CSS size by refactoring the many, inefficient media queries created from Sass @media bubbling. The second grunt plugin I use to take images and resize them into several sizes for use on my photos section. I wrote some Javascript to detect browser width on preload and swap out for the correct image size (I currently save 500, 1000 and 2000px-wide images on CloudFront) before lazy loading takes place. It also takes into account if the photos are in a grid or just by themselves so it doesn't needlessly load a large image that is being displayed smaller. Still a bit buggy though!

I recently moved from Heroku as my host to [S3 static site hosting with CloudFront](http://paulstamatiou.com/hosting-on-amazon-s3-with-cloudfront/) and couldn't have been happier. It's so much faster now!

## Any upcoming changes we should look out for?

Yes! I'm in the middle of expanding my photos section to allow for the ability to publish sets of posts from large trips along with automatic preloading for the next post for a seamless browsing experience. The first collection will be comprised of photos from [my Japan trip](http://www.youtube.com/watch?v=8fR4MjImSU0) late last year where I took 5,500+ photos that I'm trying to cull down to about 60 good photos per trip day. I'll also be incorporating video into these pages as well.

I'm a tad worried about what my CloudFront bill will look like if these posts receive any substantial traffic as each post will have several 5-30MB video clips. I had one popular blog post that hit around 500k pageviews that didn't even have many images and it was almost a $200 AWS bill that month.. but I sleep better at night knowing my site is very fast on CloudFront. :)

An early version of what these photosets could look like can be seen with my recent weekend trip to [Carmel and Monterey](http://paulstamatiou.com/photos/carmel-monterey/).

