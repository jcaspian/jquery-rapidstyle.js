# jquery-rapidstyle.js
Define css style via class names.

## How to use
1. Load the script at the end of your html.

  ```c
    ...
    <script src="jquery.rapidstyle.js"></script>
  </body>
  ```

2. Bind the trigger on document.

  ```c
  <script>
    $(function() {
      $(document).rapidstyle();
    });
  </script>
  ```

  By default rapidstyle will only runs on elements with class name "_rs".

  ```c
  <div class="_rs background-red"></div>
  ```

  You may customize the selector by specifying your custom class name, or set to "false" to allow rapidstyle to run on all elements.
  
  ```c
  $(document).rapidstyle('.rapidstyle'); // class="rapidstyle"
  $(document).rapidstyle('.rs'); // class="rs"
  $(document).rapidstyle('._rs_'); // class="_rs_"
  $(document).rapidstyle(false); // runs on all elements
  ```
