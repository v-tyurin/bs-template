(function () {
  $(document).on('change', '#tunicate__controller', function () {
    document.cookie = 'isOpenSidebar=' + $(this).is(':checked') + '; path=/';
  });
})();
