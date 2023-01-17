import React from 'react';
import {Breadcrumb, Card} from "antd";

export function Index(){
    return (
        <div>
            <Breadcrumb style={{marginTop: 20, marginBottom: 20}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <Card>
                    <h3>This demo is designed to demonstrate the ability of using <a href="https://github.com/dreampursuer/react-ror" target="_blank" rel="noreferrer" >react-ror</a> library, which uses Rails/Grails development model based on convention over configuration.</h3>
                    <h4>Features</h4>
                    <ul>
                        <li>Login</li>
                        <li>Logout</li>
                        <li>Display user information</li>
                    </ul>

                    <h4>File structures</h4>
                    <ul>
                        <li>conf: This directory contains configuration files for the application, such as ApplicationConfig.ts.</li>
                        <li>controllers: These classes handle requests and determine how to respond to them. They typically call services and use views to render the response.</li>
                        <li>views: These templates define the structure and layout of the pages that are rendered in response to web requests. </li>
                        <li>domain: These classes represent the data model of the application.</li>
                        <li>services: Implement business logic. They are used to perform tasks such as data validation, data retrieval and manipulation, and other operations that are common across multiple controllers.</li>
                        <li>components: Reusable web components.</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
}