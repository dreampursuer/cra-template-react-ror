# cra-template-react-ror

Application template created with react-ror.

This application uses Rails/Grails etc. based on the concept of convention over configuration and uses the concept of Controller/Domain/View etc. to organize the application.
This schema makes a convention for the path to the URL, using the /controller/action pattern.
For example:

```
/user/login
```

Where 'user' is the controller, the implementation is: 'UserController'.
'login' is an action, corresponding to the login method in the UserController.
See the section on 'Path Mapping' later for more details.

This template contains `[react-ror`](https://github.com/dreampursuer/react-ror) + `react-router` + `ant design` + `typescript`.

Read this in other languages: English | [简体中文](README_zh-CN.md)

## Installation

```shell
npx create-react-app my-app --template react-ror
```

or

```shell
yarn create react-app my-app --template react-ror
```

After installation, you need to manually modify `tsconfig.json` to set `experimentalDecorators` to true to support decorator:

```json
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
```

Then run:

```shell
yarn start
```

## Features

This application simply implements the following features:

- Login

- Logout

- Show user information

- Show Home Page

### Login

URL path：/user/login

Controller/action: UserController.login

View: views/user/login.tsx

In this demo, username: `admin`, password: reactror

Since there is no need for access checking in user login, use the `@skipAccessCheck` decorator before the UserController.login method to skip the access check.

### Logout

URL path：/user/logout

Controller/action: UserController.logout

View: None，invoke `redirectTo('user', 'login')`

### Show user information

URL path：/user/show

Controller/action: UserController.show

View: views/user/show.tsx

### Show Home Page

URL path：/main/index

Controller/action: MainController.index

View: views/main/index.tsx

## Directory structure and description

Because of the convention-over-configuration model, different directories contract for different capabilities.

The main directory structure is as follows:

```
├── App.tsx
├── components
│   ├── AvatarDropdown.tsx
│   └── SideMenu.tsx
├── conf
│   └── ApplicationConfig.ts
├── controllers
│   ├── MainController.tsx
│   └── UserController.tsx
├── domain
│   └── User.tsx
├── services
│   └── UserService.ts
└── views
    ├── layouts
    │   ├── MainLayout.tsx
    │   └── NeatLayout.tsx
    ├── main
    │   └── index.tsx
    └── user
        ├── login.tsx
        └── show.tsx
```

### App.tsx

The application entry calling `ReactRorApp` in react-ror, is done as follows:

```jsx
<ReactRorApp controllerMapping={controllerMapping} layoutMapping={layoutMapping} accessCheck={AccessCheck} />
```

Of which：

controllerMapping：Defines the mapping of the controller name part of the path to the controller class, e.g.

```typescript
export const controllerMapping = {
    main: MainController,
    user: UserController,
}
```

The above instructs that the action in MainController is called when /main is accessed in the path; the action in UserController is called when /user is accessed.

layoutMapping：Defines the mapping between the name of the layout and the layout view

accessCheck：Used for access checking. If not set then access checking is not enabled, this means that all pages can be accessed.

### conf directory

The conf directory is used to define the configuration file, in this template there is 'ApplicatonConfig.ts' file defines the `controllerMapping` and `layoutMapping`.

### controllers directory

All Controller files are stored in the controllers directory, and the Controller will contain various actions.

### views directory

The pages to be displayed are saved in this directory, and the directory structure of the view file is organized according to the controller as a directory in order to be able to organize the view easily.

The `layout` directory under the views directory is used to store layout files.

### domain directory

The domain directory holds entity objects.

### services directory

Various services related to business logic are stored in this directory.

### components directory

If a component can be shared by other views, it can be stored in the components directory.

## Path Mapping

The default mapping rules for paths in react-ror are as follows:

```
/:controller?/:action?/:id?
```

It is also agreed that if the controller is empty the default is `main`

If action is empty the default is `index`

The APIs related to path navigation and parameter extraction are：

- redirectTo(controller, action, params): Redirect to /controller/action with parameters

- createLink(controller, action, params): Create link. e.g.: createLink('user', 'index') => #/user/index, Preceded by # for direct use in the url.

- [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)：The hook function in react-router can be used to navigate to the specified URL.

- [useParams](https://reactrouter.com/en/main/hooks/use-params)：Getting the matching parameters in the URL, contains controller,action and id

- [useSearchParams](https://reactrouter.com/en/main/hooks/use-search-params)：Get the query parameters in the URL

## Layout Management

The layout file is saved in the views/layout directory, and the part to be exported is defined using `[<Outlet />`](https://reactrouter.com/en/main/components/outlet) to define it.

The mapping for layout is defined in conf/ApplicationConfig.ts:

```javascript
export const layoutMapping = {
    '/user/login': NeatLayout,
    '*': MainLayout
}
```

## Access Check

The accessCheck function can be passed in ReactRorApp, and if a custom access check function is passed, access will be allowed or not based on the return value in this check function.

In the implementation of this template, this function is defined in conf/ApplicationConfig.ts:

```typescript
export function AccessCheck(params?: any){
    if (!loginUser){
        redirectTo('user', 'login')
        return false
    }
    return true
}
```

You can use @skipAccessCheck if you don't want to do access checking for an action, e.g.:

```javascript
    @skipAccessCheck
    public login(){
        return <Login />
    }
```