/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Sarai Sutton",
    role: "Web Developer",
    contacts: {
        mobile: "202-427-4576",
        email: "saraitsutton@gmail.com",
        github: "ssutton427",
        location: "Washington DC"
    },
    welcomeMessage: "Hello, Welcome to My Online Resume!",
    skills: ["HTML", "CSS", "Javascript", "jQuery"],
    biopic: "images/me.jpg",
    display: function () {

        var newName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(newName);
        var newRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(newRole);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#topContacts, #footerContacts").append(mobile);
        $("#topContacts, #footerContacts").append(email);
        $("#topContacts, #footerContacts").append(github);
        $("#topContacts, #footerContacts").append(location);

        var image = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(image);
        var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(welcomeMessage);

        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(s, index) {
            var skill = HTMLskills.replace("%data%", s);
            $("#skills").append(skill);
        });
    }
};
bio.display();

var education = {
    schools: [{
        name: "YearUp/Nova Community College",
        location: "Arlington, VA",
        degree: "Certification",
        majors: ["Information and Technology", "p"],
        dates: "March 2015 - January 2016",
        images: ["images/yu_diploma.JPG"]
    }],
    onlineCourses: [{
        title: "Frontend Webdevelopment",
        school: "Udacity",
        dates: "May 2017 - Current",
        url: "www.udacity.com"
    }],
    display: function () {

        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(obj, index) {

            var newSchoolName = HTMLschoolName.replace("%data%", obj.name);
            var newSchoolDegree = HTMLschoolDegree.replace("%data%", obj.degree);
            var newSchoolLocation = HTMLschoolLocation.replace("%data%", obj.location);
            var newSchoolDates = HTMLschoolDates.replace("%data%", obj.dates);
            var majors_str = "";
            obj.majors.forEach(function(major, index){
              majors_str = majors_str + major + " ";
            });

            var newMajor = HTMLschoolMajor.replace("%data%", majors_str);
            $(".education-entry").append(newMajor);

            $(".education-entry").append(newSchoolName + newSchoolDegree);
            $(".education-entry").append(newSchoolLocation);
            $(".education-entry").append(newSchoolDates);

            obj.images.forEach(function(img, index){
              var newImg = $("<br/><img width=\"250px\" src=\"" + img + "\"/>");
              $(".education-entry").append(newImg);
            });
        });

        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(obj, index) {

            var newtitle = HTMLonlineTitle.replace("%data%", obj.title);
            var newschool = HTMLonlineSchool.replace("%data%", obj.school);
            var newdates = HTMLonlineDates.replace("%data%", obj.dates);
            var newurl = HTMLonlineURL.replace("%data%", obj.url);

            var div = $("<div class=\"onlinecourses-div\">");
            $(div).append(newtitle + newschool);
            $(div).append(newdates);
            $(div).append(newurl);
            $("#education").append(div);
        });
    }
};
education.display();

var work = {
    jobs: [
      {
            employer: "World Bank HeadQuarters",
            title: "IT Coordinator II - Contractor",
            dates: "June 2017 - Current",
            location: "Washington, DC",
            description: "Administered the migration of Microsoft OneDrive transition from Box, backing up data and syncing data, and aided clients how to properly use the new applications, and maintain current files and documents; Install, test, and troubleshoot any current issues with OneDrive; articulate and escalate issues that come from clients and users to enhance client satisfactory, Consistently resolve around ten tickets a day via BMC Remedy ticketing service; detected, configure, and debug problems with outlook and other applications to reduce tickets by informing clients of potential issues; Collaborated with other Local IT’s as a roaming IT; adding and updating software, reimaging laptops, and assisting other Local IT’S with current projects to lessen workload for the team"
        },
        {
            employer: "International Finance Corporation World Bank",
            title: "IT Coordinator - Contractor",
            dates: "October 2016 - June 2017",
            location: "Washington, DC",
            description: "Supported approximately 75 rooms for conferences and events clients have daily; served as first contact to clients for any troubles regarding problems within the conference room accelerating client customer service, Advocated video conference calls to ensure web and audio calls could connect properly to clients in and out of countries centralizing the company’s conferencing services, Set up audio calls and video conference calls to approximately 20 conference rooms a day using webex to dial out international calls and video addresses over Cisco telepresence and Polycom telepresence technology system, Monitored and muted calls during conferences to ensure that no feedback and clear audio would be heard for clients who have over 100 people dialing in; surpassed and rehabilitated the company’s structure by coaching team members"
        },
        {
            employer: "Crowell & Moring LLP",
            title: "Conference Technician",
            dates: "August 2016 - October 2016",
            location: "Washington, DC",
            description: "Created and printed daily schedule for myself and my team to expedite a day of success for all team members, Brought innovative ideas to the conference team, to improve client satisfaction and how to prevent future issues, Prepared and set up VC’s daily for internal and external clients, providing intense customer focus, Contributed to breaking down and setting up conference rooms before and after all meetings maintaining the team’s dependability, Performed 100% ticket closings daily via remedy on first call, no escalations; addressed any issues clients"
        },
        {
            employer: "International Finance Corporation/The World Bank Group",
            title: "IT Coordinator",
            dates: "January 2016 - August 2016",
            location: "Washington, DC",
            description: "Supported approximately 75 rooms for conferences and events clients have daily; served as first contact to clients for any troubles regarding problems within the conference room accelerating client customer service, Advocated video conference calls to ensure web and audio calls could connect properly to clients in and out of countries centralizing the company’s conferencing services, Illustrated audio calls and video conference calls to approximately 20 conference rooms a day using webex to dial out international calls and video addresses over Cisco telepresence and Polycom telepresence technology system, Monitored and muted calls during conferences to ensure that no feedback and clear audio would be heard for clients who have over 100 people dialing in; surpassed and rehabilitated the company’s structure by coaching team members"
        },
        {
            employer: "Government Accountability Office",
            title: "SRA PC Technician",
            dates: "January 2016 - Febuary 2016",
            location: "Washington, DC",
            description: "Operated the company’s migration project to Windows 7 & 8 software to provide a smooth transition the company and clients, Wiped and imaged over 50 computers per day with Windows 7 & 8 images furthering the teams daily goal"
        },
        {
            employer: "Accenture Federal Services",
            title: "Desktop Technician",
            dates: "June 2015 - January 2016",
            location: "Washington, DC",
            description: "Regularly imaged more than 50 laptops with Win7 and Win8 daily to ensure that enough computers are ready to be setup and configured by techs, Created and assigned tickets daily using Service Now software for customers at the walk-up window, replace and add ram on five laptops daily, repair all laptops assigned to my ticket que in Service Now software, Set up and configured 10 laptops a day for new joiners and contractors, upgrade hardware to newer model laptops and convert all data from one laptop to another; assign hardware to users by updating Cerison software so that the team can view and manage what has been giving out, Performed swap and loaner inventory report on Cerison software; replace all needed supplies; setup desktop computers"
        },
        {
            employer: "Protocall Communications",
            title: "Sales Respresentive",
            dates: "September 2014 - January 2015",
            location: "Washington, DC",
            description: "Sold over 60 client products a month to help the company reach its monthly quota, Developed pitches for outgoing and incoming calls, explaining details to ensure customer satisfaction of the company’s product, Negotiated, explored, and compared prices to other competing companies with customers to make sure they were confident about purchasing"
        },
        {
            employer: "Department of Motor Vehicles",
            title: "Legal Instrument Examiner - Intern",
            dates: "April 2014 - August 2014",
            location: "Washington, DC",
            description: "Completed 50 transactions a day using Destiny software, with services including converting out-of-state license, first time vehicle titling and registration, as well as license reinstatement and registration renewals, Supported and addressed customers at the front desk to ensure all questions were answered, all documents required were up to date and correct; informed customers on changes in policies; followed up with customers waiting for MPD inspections to return, and clarified the next steps to getting vehicle registered"
        }
    ],
    display: function () {

        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(obj, index) {

            var newemployer = HTMLworkEmployer.replace("%data%", obj.employer);
            var newtitle = HTMLworkTitle.replace("%data%", obj.title);
            var newdates = HTMLworkDates.replace("%data%", obj.dates);
            var newlocation = HTMLworkLocation.replace("%data%", obj.location);
            var newdescription = HTMLworkDescription.replace("%data%", obj.description);

            var div = $("<div>");
            $(div).append(newemployer + newtitle);
            $(div).append(newdates);
            $(div).append(newlocation);
            $(div).append(newdescription);

            $(".work-entry").append(div);
        });
    }
};
work.display();

var projects = {
    projects: [
      {
            title: "Portfolio",
            dates: "June 2017",
            description: "Udacity FEND Project 2 - Using Bootstrap",
            images: ["images/project_img.png"]
        }

    ],
    display: function () {

        $("#projects").append(HTMLprojectStart);
        projects.projects.forEach(function(obj, index) {

            var newtitle = HTMLprojectTitle.replace("%data%", obj.title);
            var newdates = HTMLprojectDates.replace("%data%", obj.dates);
            var newdescription = HTMLprojectDescription.replace("%data%", obj.description);

            $(".project-entry").append(newtitle);
            $(".project-entry").append(newdates);
            $(".project-entry").append(newdescription);

            obj.images.forEach(function(img, index){
              var newimage = HTMLprojectImage.replace("%data%", img);
              $(".project-entry").append(newimage);
            });

        });
    }

};
projects.display();



$("#mapDiv").append(googleMap);
