# squarespace-custom-event-table

A custom, responsive event table display using SquareSpace for developers

SquareSpace provides a few layout options for events, but our specific layout had some features SquareSpace did not provide out of the box.

This code lays events out as a table on desktop and a list on mobile.

## Features

* Display as table on desktop, stacked list on mobile
* Display city and state, without zip code
* Limit of six events (this must be done via CSS, since SquareSpace's limit is broken)

### Desktop Preview

| Event         | Date              | Where                |           |
| ------------- | ----------------- | -------------------- |:---------:|
| Excerpt #1    | Apr 29<br>6:45 PM | LOCATION<br>City, ST | More info |
| Excerpt #2    | May 2 <br>7:00 PM | LOCATION<br>City, ST | More info | 
| Excerpt #3    | May 11<br>5:15 PM | LOCATION<br>City, ST | More info |

### Mobile Preview

Excerpt #1

Apr 29 - 6:45 PM

LOCATION
City, ST

More info

----------------

Excerpt #2

May 2 - 7:00 PM

LOCATION
City, ST

More info

----------------

Excerpt #3

May 11 - 5:15 PM

LOCATION
City, ST

More info

----------------

## How to preview locally

### Finding your way around

#### /blocks/index-events.block

The main HTML template

#### /scripts/index-events.js

Strips the zip code from the event location (requires jQuery)

#### /styles/events.less

Includes CSS workaround for displaying only the first six (6) events

#### Other

Aside from the files included for reference in the setup step (below), any other files are not required

### Setup

#### From SquareSpace's CMS

You must create a page of events and drag/drop it into your index/Welcome page so it exists within the tree (the Pacific template works great for this)

The URL Slug must be **/events**

#### /template.conf

Use your own **template.conf** file

* Add "events.less" to the "stylesheets" section
* Add "events" to "systemCollections"
* Ensure you have set up your "siteurl" and "password" (if necessary) under "server"
* Note: This custom block has only been tested with the "Pacific" template

#### /site.region

Use your own **site.region** file (not included in this repo)

* Add `<squarespace:script src="index-events.js" combo="true" />` to the list of scripts

#### /collections/index.conf

Use the **index.conf** in this repo or ensure that "events" is in the "acceptTypes" list

#### /collections/index.list

Use the repo's included **index.list** as a guide for how to customize your own index.list file. The important code to inject is the following:

```
{.collectionTypeNameEquals? events}
  {@|apply index-events.block}
{.end}
```

### Local Server

Use Node SquareSpace Server by kitajchuk to run SquareSpace locally. Instructions may be found at

https://github.com/kitajchuk/node-squarespace-server

**Note:** You do not need to download the repo. Simply install with Node Package Manager

`npm install -g node-squarespace-server`

Preview the site by running the server at the command prompt (make sure you are in the same directory as template.conf)

`sqs server --port=8000`

Open the following URL in your web browser:

`localhost:8000`

