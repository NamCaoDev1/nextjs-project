const LoginTestClient = () => {
  return (
    <div>
      <div>
        It’s Usually Faster — NextJS servers are usually deployed in the same
        Virtual Private Cloud (VPC) or cluster as the microservices they call.
        This means that the network latency between the NextJS server and the
        microservices is very low. This is not the case for requests from the
        client. A customer web client can be anywhere, and the network latency
        between the client and the microservices is much higher. This means that
        fetching data on the server is usually faster than fetching it on the
        client. Microservices Stay Behind the Firewall — If only the NextJS
        server (or other microservices) can talk to the microservices then those
        microservices can stay behind the firewall. This means the surface area
        of attacks is limited to just the NextJS server itself. To make the API
        calls from the client we would have to expose the microservices to the
        public internet, which expands the security risk. API Keys Are Hidden —
        If we are using third party serivces as part of our application then
        those probably have API keys. Those keys should never go out to the
        client. Making the requests only from the NextJS server ensures that
        those keys are hidden.
      </div>
    </div>
  );
};

export default LoginTestClient;
