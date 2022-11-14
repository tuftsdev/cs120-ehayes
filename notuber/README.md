# Lab 8: The Ride-Hailing Service, part 1

As far as I believe, everything (except for the Performance Optimization Requirements) has been implemented as outlined in the lab assignment.
I did not collaborate with anyone for this lab. I spent approximately 2-3 hours completing this lab, and I learned a lot about Typescript second-hand from the Google Maps API documentation.
I used Lighthouse to test and verify performance and other metrics about the site. I implemented some performance enhancements that entailed adding two <meta> elements to the html, one for viewports for mobile devices and one to provide a description. 


Here are some metrics gathered:

### First Contentful Paint
0.4 s

### Time to Interactive
0.5 s

### Speed Index
0.6 s

### Total Blocking Time
0 ms

### Largest Contentful Paint
0.9 s

### Cumulative Layout Shift
0

After the optimizations were added, Lighthouse gave the site 
the following scores:

### Performance: 99

### Accessibility: 100

### Best Practices: 92*

(One issue was found here pertaining to the Street View Pegman Control, which I was not directly using on the site.. so I am a bit confused as to why its causing a problem here.)

### SEO: 100

# Lab 10: The Ride-Hailing Service, part 2

As far as I believe, everything (except for the Performance Optimization Requirements) has been implemented as outlined in the lab assignment.
I did not collaborate with anyone for this lab. I spent approximately 8 hours completing this lab, and I learned a lot more about how Javascript works, especially asynchronously. I also learned about how distances are computed and how to give markers infoWindow tabs that show useful information from user clicks.

# Lab 12 The Ride-Hailing Service, part 3

As far as I believe, this lab has been completed following all of the 'basic' requirements. I spent about 5 hours on this lab, most of it spent working on debugging the back-end on heroku. I had never worked on a back-end before, so I learned quite a lot in completing this assignment.
I have completed #1, 3 and 4 of the 'going beyond' specifications in the lab, and have verified that they work using curl like so: `curl --data "username=ZlrthCQi" https://secret-fjord-19550.herokuapp.com/passenger.json -X GET`. 