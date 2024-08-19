const generateCustomerServiceScript = (businessId) => {
  const scriptContent = `
<script type="text/javascript">
  window.__be = window.__be || {};
  window.__be.id = "customer-service-chat-by-prisma";

  (function () {
    var be = document.createElement('script');
    be.type = 'text/javascript';
    be.async = true;
    be.defer = true;
    be.src = (document.location.protocol == 'https:' ? 'https://' : 'http://') + '${import.meta.env.VITE_SERVER_DOMAIN}/createScript/${businessId}';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(be, s);
  })();
</script>
<noscript>You need to enable JavaScript in order to use the AI chatbot tool powered by prima</noscript>`

  return scriptContent
}

export default generateCustomerServiceScript
