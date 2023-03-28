# Workday Scheduler

## Description
In order for users to log notes for themselves and schedules events, tasks, or to-dos, the workday scheduler site allows users to type in the text areas of each hour of the workday and save their notes/events. Upon refreshing or quitting/re-opening the site, all saved notes are retrieved from the local storage. 

The user is also easily able to see what events/hours have passed, because the color of the timeblocks changes to gray. The present hour is shown in red, and all future events are shown in green. 

This project helped me gain a solid understanding of using a for loop and traversing the DOM using jquery. It also helped with practicing using dayjs to grab and display the 
current day and time.

<img width="1679" alt="Screen Shot 2023-03-27 at 9 23 24 PM" src="https://user-images.githubusercontent.com/124822025/228107293-a7e90aba-6716-4cec-aced-dc557ed87ebf.png">

## Usage

Users that use this page are able to type and enter events at each hour of the day. At a glance, they can easily tell if an event/hour has passed, is present, or in the future based on colors of the blocks. Gray refers to events in the past, red is the present, and hour blocks in green are in the future. The date is also displayed at the top of the page to easily reference and plan the day.

When the page is closed and reloaded, all saved events are stored in the same hour they were entered in.

Give it a try! [https://miamreid.github.io/workday-scheduler]

Or see the repository: [https://github.com/miamreid/workday-scheduler]

## License

No license. N/A.
