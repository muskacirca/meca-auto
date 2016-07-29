'use strict'

import React from 'react'
import Calendar from './calendar/Calendar'

var CLIENT_ID = '1026973050796-k1k88b9umrhkckd7v9en1kfjr2l9iern.apps.googleusercontent.com';
var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

class Booking extends React.Component {

    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        console.log("component did mount");
        this.checkAuth()
    }

    /**
     * Check if current user has authorized this application.
     */
    checkAuth() {
        
        console.log("check auth");
        
        gapi.auth.authorize(
            {
                'client_id': CLIENT_ID,
                'scope': SCOPES.join(' '),
                'immediate': true
            }, this.handleAuthResult.bind(this));
    }

    /**
     * Handle response from authorization server.
     *
     * @param {Object} authResult Authorization result.
     */
    handleAuthResult(authResult) {

        console.log("handle auth result");
        
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
            // Hide auth UI, then load client library.
            authorizeDiv.style.display = 'none';
            this.loadCalendarApi();
        } else {
            // Show auth UI, allowing the user to initiate authorization by
            // clicking authorize button.
            authorizeDiv.style.display = 'inline';
        }
    }

    /**
     * Initiate auth flow in response to user clicking authorize button.
     *
     * @param {Event} event Button click event.
     */
    handleAuthClick(event) {
        
        console.log("handle auth click");
        
        gapi.auth.authorize(
            {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
            this.handleAuthResult.bind(this));
        return false;
    }

    /**
     * Load Google Calendar client library. List upcoming events
     * once client library is loaded.
     */
    loadCalendarApi() {
        
        console.log("loadCalendarApi");
        
        gapi.client.load('calendar', 'v3', this.listUpcomingEvents.bind(this));
    }

    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    listUpcomingEvents() {
        
        console.log("in upcoming events");
        

        var request = gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
        });

        request.execute((resp) => {
            var events = resp.items;
            this.appendPre('Upcoming events:');

            if (events.length > 0) {
                for (let i = 0; i < events.length; i++) {
                    var event = events[i];
                    var when = event.start.dateTime;
                    if (!when) {
                        when = event.start.date;
                    }
                    this.appendPre(event.summary + ' (' + when + ')')
                }
            } else {
                this.appendPre('No upcoming events found.');
            }

        });
    }

    /**
     * Append a pre element to the body containing the given message
     * as its text node.
     *
     * @param {string} message Text to be placed in pre element.
     */
    appendPre(message) {
        var pre = document.getElementById('calendar-output');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
    }



    render() {
        return  <div>
                    <div id="authorize-div"></div>
                    <div id="calendar-output"></div>
                    <button className="btn btn-primary" onClick={this.handleAuthClick.bind(this)}>Load</button>
                    <Calendar />
                    
                </div>
    }
}

Booking.propTypes = {

};

export default Booking
