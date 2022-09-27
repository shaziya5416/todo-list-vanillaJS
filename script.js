<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css">
    <title>TODO App</title>
  </head>
  <body>
    <main>
      <header>
        <h1>todos</h1>
      </header>
      <section class="container">
        <input
           type="text"
           placeholder="What needs to be done ?"
        >
        <ul>
          <!-- <li>
            <input type="checkbox" name="checkbox" id="checkbox">
            <span class="name"></span>
            <button class="cross-btn">X</button>
          </li> -->
        </ul>
      </section>
      <section class="container relative">
        <div class="outer">
          <div class="middle">
            <div class="edit_todo">
              <button class="left_items btn"> <small class="left_items_data">3</small> items-left</button>
              <button class="all_items btn">All</button>
              <button class="active_items btn">Active</button>
              <button class="completed_items btn">Completed</button>
              <button class="clear_completed btn">clear completed</button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
