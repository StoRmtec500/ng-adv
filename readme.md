﻿# Advanced Angular Development

Companion Material for Class Delivery by [Alexander Pajer](https://www.integrations.at/kontakt.aspx) containing:

- [Requirements / Tooling](./Tooling)
  - [Git & GitHub Basics](./Tooling/01-Github)
  - [Visual Studio Code Intro](./Tooling/02-VSCode)
  - [Document Repos using Markdown](./Tooling/03-Markdown)
- [Instructor Demos](./Demos)
- [Guided Scripts to setup an Azure hosted Development & Lab VM](./Setup)
  - [Using Azure CLI](./Tooling/04-CLI)
  - [Base Dev Environment Setup inkluding Visual Studio Code Extensions](./Setup/#basics)
  - [Setup Windows Subsystem for Linux 2 - WSL2](./Setup/#wsl)
  - [Setup Docker & Kubernetes](./Setup/#docker-wsl)
  - [Use Teams in VM](./Setup/#teams)
- [Labs](./Labs)

## Topics

## Theming & Visual Feedback (Animations)

- Styling Angular Components Deep Dive
- Comparing Angular Material & Bootstrap
- Bootstrap Resets, Layout Helper & Utiliies
- Best of Both: Combining Bootstrap & Angular Material
- Theming Overview
- Building a Reusable Theme
- Define Alternative Themes
- Use Fore- and Back-Color
- Use Theme Mixins
- Theming Custom Components
- Introduction to Visual Feedback
- In-Page Feedback (Saved, Loading Spinners, ...)
- Implementing Page Transitions

## Advanced Observables & Reactive Programming

- Java Script Language: Functional Programming, Immutability, Destructuring
- Recap: Observables, Operators & Subjects
- Base Operators: Mapping, Filtering, Merging, Scanning, ...
- Understanding & Implementing Marble Diagrams
- Debugging & Visualizing Observables
- Using Declarative Approach - Async Pipe
- Implementing Error Handling
- Data- vs Action-Streams
- Higher Order Mapping Operators
- Data Composition - Joining Observable Streams
- Data Caching & Invalidation
- Implementing Custom Observable Operators

## Advanced State Management using NgRx

- Overview State Management Patterns
- Observable Data Services & Event Bus
- Introduction to the Redux Pattern
- Understanding NgRx and know when to use it
- Using Store, Actions and Reducers
- Debugging NgRx using Redux Dev Tools
- Implementin & Using Selectors
- Using Effects, Facades & Action Creators
- Scaffolding using NgRx Schematics
- NgRx Entity Adapters
- Using NgRX Data for larger Datasets

## Building & Optimizing Applications

- Using Linting and Autoformat with Prettier
- Using Chrome Dev Tools & Lighthouse for Performance Optimization
- Understanding & Using Page Traces
- Understanding Ivy and what it means for future Angular Releases
- Advanced Angular Debugging using @angular/core/global
- Analyzing and Optimizing Bundles & Modules
- Code-Splitting and Module Pre-Loading
- Understaning & Optimizing Angular Change Detection
- Optimize Change Detection using @ngrx/component & ngrxPush

## Reactive Forms Deep Dive

- Recap Reactive Forms Revisited (FormGroup, Form Builder, FormControl, Forms Array)
- Form Validation
- Implementing Custom Validators
- Cascading Form Controls
- Dynamic Form Generation & Validation (Manual & ngx-formly)
- Declarative Binding in Reactive Forms using RxJS

## Routing & Securing Angular using NgRx

- Angular Location Service
- Using multible Route Guards & Interceptors
- Introduction to @ngrx/router-store
- Implementing Global Error Handling
- AppShell & App Initialization
- Router State & Custom Serialization
- Route Guards & Interceptors with NgRx
- Routing & App Initialization
- Dynamic Component Loading
- Recap Jwt, OAuth 2.0 & OpenID Connect
- Cloud based Logins: Azure AD
- Using Social & Cloud Logins: MSAL, Google, Facebook ...
- Authentication in Angular with NgRx
- Security Analysis in DevOps Pipelines

## Advanced Testing including Jest & Cypress

- Recap: Unit Testing
- Using Testbed & Spies
- Setting up Mock Data
- Shallow / Deep Component Integration Tests
- Async Component Testing (done, fakeAsync, async whenStable)
- Http Testing
- Introduction to Marble Testing
- Testing NgRx: Mock Store, Mock Selectors, Reducers, ...
- Using Jest for Unit Testing (Setup, Changes in spec, Snapshot Tests)
- End-2-End Testing using Cypress
- Integrate Angular Testing in DevOps Pipelines

## Scaffolding & Automation using Angular Schematics

- What is Angular Schematics
- Using build-in Schematics
- Understanding Abstract Syntax Tree (AST)
- Adding & Modifying Files
- Using a Sandbox for Schematics Development & Testing

## Reusability using Angular Libraries

- Angular Building Blocks: Workspace, Apps, Libraries
- Sharing Code between Projects using Angular Libraries
- Implementing, Using & Publishing Libraries
- Understanding & using Monorepos
- Developing in Monorepos with nrwl NX

## Web Components using Angular Elements

- Why Web Components
- Understanding Shadow DOM, Templates & Custom Elements
- Creating reusable Web Components using Angular Elements
- Addressing Browser Compatibility Issues

## Server Side Rendering (SSR) using Angular Universal

- Why Server Side Rendering
- Angular Universal Architecture
- Node Express Introduction
- Configure Server Side Rendering
- Prerender static pages
- Using App Shell

## Progressive Web Apps (PWA)

- What are Progressive Web Apps
- Understanding and Configuring Service Workers & Manifests
- Installing & Updating Progressive Web Apps
- Supporting Offline Availability
- Implementing Push Notifications
- Using App Shell

## Advanced Hosting using Docker & Angular DevOps

- Deployment Overview & Hosting Options
- Blob Storages & URL Rewriting
- Publishing using ngDeploy
- Injecting Configuration to enable Multi Stage DevOps
- Docker & Kubernetes Introduction
- Building an Angular Multi-Stage Docker Image
- Implementing a 3-Tier Application
- Implementing Configuration Management for Containers
- Implementing a Helm Chart for Kubernetes
- Introduction to Angular DevOps using GitHub Actions
