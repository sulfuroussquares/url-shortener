# URL Shortener

---

This microservice will be able to take in a url to shorten, then provide a JSON-formatted response containing the shortened version of that url, this shortened-version can then
be used to access the website, just as the long-form version would.

The functionality will look something similar to [this](https://url-shortener-microservice.freecodecamp.rocks/).

---

---

### User Stories

| Story                                                         | Completed? |
| ------------------------------------------------------------- | ---------- |
| I can access a landing page with a description of the service | **YES**     |
| The service receives a url to shorten                         | **NO**     |
| The service provides a shortened version of the provided url  | **NO**     |

---

### Implementation

I should implement a basic form to allow users to enter their requested website.

The concept that comes to mind when viewing the boilerplate is that of _hashing_. In a **hash table** or **hash map**, we can take a value, then apply some sort
of mathematical formula to alter that value, then use that same formula to find the stored location of that value in an array (or array + linked list) type of structure.

Here, we can take a value (such as a url to shorten), apply some sort of calculation to it, then return a result which makes sense to our algorithm that allows us to obtain the original
url when accessed.

#### First thing's first

We have a basic form on our HTML landing page. What we need is a way to send/receive what is in the textbox in order to maniuplate it.

---

#### Credit

The idea for this project (and base fork boilerplate with no functionality) comes from [FreeCodeCamp](https://www.freecodecamp.org/).  
I used [Glitch](https://glitch.com/) as a quick way to build/test a Node-based webapp without having to set up a local repository on my machine.

##### [URL Shortener Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice)
