# SabbathOrSundayRedirect
There are many reasons why you may want to redirect your webpage to another page on a particular day.

It may be that you are part of a faith that marks a holy day - for example Christians mark Sundays as the Sabbath. You may want to redirect your site on a Holy Day.

It may be that you always perform updates or make changes on a particular day of the week and want to display a holding page instead.

There may be other reasons.

Whatever the reason, if you want to redirect your page on a particular day, this script will do just that.

## Implementation

To implement this script, simply copy/paste it to the top of your HTML or Markdown page (it will work in other places, but I've only tested it in HTML and Markdown). It goes at the top of the 'body' section, or in the case of Markdown, below the information fields and above your content. Make sure to copy all of it, including the `<script>` and `</script>` tags.

As it stands, there are only two changes you need to make.

1. On line 6 of the code, change the number (default `0`) to the day of your choice. As the comment says, Sunday is 0, Monday is 1, Tuesday is 2, etc

2. On line 8 of the code, replace `'/path/to/sunday-page'` with the URL of your redirect page. This can either be an absolute link or a server-side link. Be sure to keep the two apostrophes on either side of the URL, or it won't work.

## Conclusion

This is a very simple script that many people would be able to write in their sleep; but for those who have been struggling to find a way to affect a redirect like this, I hope it is of help to you.
As ever, contact me with any comments or questions.

Best wishes
Michael GM5AUG - "Michael-AUG"
