# jquery-rapidstyle.js
Define css style via class names.

## How to use
1. Load the script at the end of your html body.

  ```c
  <body>
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
  // class="_rs" (the default selector setting)
  $(document).rapidstyle();
  $(document).rapidstyle('._rs');
  
  // class="rapidstyle"
  $(document).rapidstyle('.rapidstyle');
  
  // class="rs"
  $(document).rapidstyle('.rs');
  
  // class="_rs_"
  $(document).rapidstyle('._rs_');
  
  // runs on all elements
  $(document).rapidstyle(false);
  ```

3. Start rapid styling.
  ```c
  <a class="_rs color-rgb(173,254,79) font-weight-600 text-decoration-none">hello</a>
  <div class="_rs background-color-#ccc padding-20px">block</div>
  ```
