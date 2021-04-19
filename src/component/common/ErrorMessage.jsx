import React from "react";

function ErrorMessage({error}) {
    if (!error) {
        return (
            <></>
        );
    } else {
        var messages = []
        for (var topic in error.data) {
            for (var index in error.data[topic]) {
                messages.push(`${topic}: ${error.data[topic][index]}`)
            }
        }
        return (
            <div className="alert alert-danger mt-2" style={{display: 'block'}} role="alert">
                <h4>{error.title}</h4>
                <ul>
                    {messages.map((message, i) =>
                        <li key={i}>{message}</li>
                    )}
                </ul>
            </div>
        );
    }
}
export default ErrorMessage