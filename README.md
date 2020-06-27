![JS x Firebase](https://i.imgur.com/yul6hNy.png)

# Click Counter

JCC (JS Click Counter) is a simple and easy to use click counter.

Let your visitors share a like on your website, keep track of downloads and count how many time a link has been clicked with a single lightweight JS file.

## Install

```html
<script src="love-btn.js" defer></script>
```

**JCC use Axios**
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" defer></script>
```

```html
<!-- YOURFILE.html -->
<button
  id="love-btn"
  class="p-4 my-4 bg-gray-800 shadow-md rounded-md text-2xl w-64 focus:outline-none hover:bg-white hover:text-gray-900"
>
  Send some ❤️
</button>

<h2 id="love-counter" class="text-xl font-bold"></h2>
```

## Firebase Settings

**JCC work better with Firebase Realtime Database.**

1 - Create a Firebase account
https://firebase.google.com/

2 - Add a New Project to Firebase

3 - Create a new Realtime Database

Add two childs to your Database :

```
your-project
|
|--firstChild
|   |
|   |--counter: 0 // For your "love" counter
|
|--secondChild
    |
    |--trackDownloads: 0 // For your "Downloads" counter
```

Edit your .js file with your own informations :

```js
// If you want to add a "love" counter
const firesbase = "https://your-project.firebaseio.com/firstChild.json";

// If you want to add a "Downloads" counter
const firesbaseDownload =
  "https://your-project.firebaseio.com/secondChild.json";
```

## Recommanded Firebase rules

```json
{
  "rules": {
    "firstChild": {
      ".read": true,
      ".write": "data.exists() && newData.exists()",
      "counter": {
        ".validate": "newData.val() == data.val() + 1"
      }
    },

    "secondChild": {
      ".read": true,
      ".write": "data.exists() && newData.exists()",
      "trackDownloads": {
        ".validate": "newData.val() == data.val() + 1"
      }
    }
  }
}
```
