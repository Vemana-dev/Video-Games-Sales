# Video-Games-Sales
HTML, JavaScript, D3 project

Final Technical Report
•	Abstract
Video games is one of most popular entertainment among the kids, even adults also got addicted to it. Video games promotes teamwork between different players to solve problems. It enhances coordination of eye, brain and hands for many children and this has been proved through cure of Autism. It entertains people to make them feel relaxed after a whole day of work. The dataset consists of following variables Name, Platform, Year of Release, Genre, Publisher, Developer, Nasals, Easels, Pales, Other Sales, Global Sales along with this it has user score, count, critic score, count and ESRB ratings. Use the visualization tools we learned to create a beautiful and easy-to-understand data visualization system. 
•	Objectives
This project uses a variety of data visualization tools to represent the relationship between the features of video game sales, game types, player ratings, and year of release. Use these tools to make advanced, beautiful, and easy-to-understand data visualization charts.
•	Functional requirements
Functions of the entire system that follow by cleaning up data, importing data, and using applied methods to present the complex data of visualization. When cleaning dataset, use some packages such as Pandas and Numpy in python to clean up invalids and duplicates in the dataset. When cleaning up duplicates, some games have the same name, platform, and publisher but different in other variables, so the drop duplicates function will recognize errors. So later I chose to clean it by manually in Excel. Then, imported into a new Excel, in order to get the desired statistical results, initially I used “COUNTIF” function to do, but it is cumbersome, which need to count each element of the column, so later using the pivot table that can have a more intuitive solution to the problem. Import the prepared table into google sheets. Draw a chart with HTML, add a text style with CSS, and d3.javascript can bold or highlight the text.
•	System architecture and description
 
Download the dataset from Kaggle, use python for data cleansing and apply Excel pivot table to get the required variables, then import the data into Google sheets. Use HTML and Google API to visualize the data. At the same time, use JavaScript to add specific features to the web page, d3.js could change the title font of the chart titles or some texts to present a beautiful and meaningful web page.
•	Development platforms
The system has combined by various tools and various techniques, which have used D3.js, Google API, HTML, JavaScript to present the data in various visual form.
•	Proposed visualizations
The system has shown the relationship between the year and platform’s vendor, global sales and genre, global sales and NA sales, sales year and the number of sales, genre and user score, publisher and total sales, global sales and game names, etc. Also, histograms graph shows user rating and some other variables.
•	Experimental analyses and conclusions
Here are two graphs are shown below. The first graph is Year of Release vs. Sold Units (in Million) for Platform Vendor, and we could see Nintendo and Sony have the high sales from 1980 to 2016， so that it can be seen Sony's play station and Nintendo's switch have developed very well. Sony's sales steadily from 1993 to 2015, and Nintendo's sales steadily increased. The second graph shows Year of Release vs. Released titles, as we could see Nintendo and Sony have increased from 1995 to Present, Sony is very stable. Nintendo has several very high peaks due to the introduction of Switch’s games and its sales have been greatly improved.
In terms of sales volume, the game is loved by the general public and the trend is increasing year by year. Microsoft, Sony and Nintendo have very good sales. This project uses a lot of tools to visualize the data, through continuous exploration to find problems and solve problems. Follow-up will continue working on this project to present better visualization of data.


