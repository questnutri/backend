<h1>How to Use Swagger Classes to Build an API Structure</h1>

<p>This guide explains how to use the Swagger classes to define API routes and responses in a structured way, allowing
	you to generate comprehensive API documentation.</p>

<h2>How to Use the Classes</h2>

<p>To build the API documentation, follow these general steps:</p>

<h3>SwaggerUrlTree:</h3>
<p>This class is used to create root URL path representations, that can be branched or leafed.<br>
	Use the <code>SwaggerUrlTree</code> class to define the root paths (e.g., /auth, /nutritionist, etc.).</p>

<h4>Add Branches:</h4>
<p>A <code>SwaggerUrlTree</code> can have branches of other <code>SwaggerUrlTree</code>.<br>
	A <strong>branch</strong> in the URL tree represents a logical grouping of routes. For example, the /admin route
	could be a branch under /auth. This means that the final root will be something like /auth/admin.</p>

<h3>SwaggerUrlLeaf:</h3>
<p>A <strong>leaf</strong> represents an individual API endpoint (e.g., /login). Use the <code>SwaggerUrlLeaf</code>
	class to define each specific endpoint under its respective branch or tree.</p>

<h3>Define HTTP Methods:</h3>
<p>For each route (leaf), use the <code>SwaggerMethod</code> class to define which HTTP method(s) (POST, GET, etc.) the
	route should handle.<br>
	SwaggerMethod objects must be instantiated with the desired method, like:</p>
<ul>
	<li><code>SwaggerMethod.get()</code></li>
	<li><code>SwaggerMethod.post()</code></li>
	<li><code>SwaggerMethod.put()</code></li>
	<li><code>SwaggerMethod.delete()</code></li>
</ul>

<h3>SwaggerMethod:</h3>
<p>The <code>SwaggerMethod</code> class is used to define the HTTP method for each endpoint.<br>
	It is necessary to specify the method type (e.g., POST, GET, PUT, DELETE) and can also include a summary and
	description, request body, and responses.</p>

<h4>Example of Defining a POST Method:</h4>
<p>To define a POST method for an endpoint like /login, use the following:</p>
<pre><code>SwaggerMethod.post()
  .setSummary('Example post')
  .setDescription('This route is an example')
  .setRequestBody(
	SwaggerUtil.Response.application_json(
		SwaggerSchema.Nutritionist.schema.schema
	)
  )
</code></pre>

<h3>SwaggerResponse:</h3>
<p>The <code>SwaggerResponse</code> class is used to define responses for each HTTP method.<br>
	Each response must include an HTTP status code (e.g., 200, 400) and a description of the response, along with any
	associated content.</p>

<h4>Example of Defining a Response:</h4>
<pre><code>SwaggerResponse.builder()
  .setCode(HttpStatus.OK)
  .setDescription('Response Ok')
  .setContent(SwaggerUtil.Response.application_json(SwaggerSchema.Nutritionist.schema))</code></pre>

<h3>SwaggerShared:</h3>
<p>This class contains common or shared request bodies and responses that are used across different endpoints.<br>
	By using SwaggerShared, you can avoid repetition and reuse elements like request bodies
	(<code>SwaggerShared.RequestBody.login</code>) and responses (<code>SwaggerShared.Responses.login</code>) throughout
	the API.</p>

<h3>SwaggerSchema:</h3>
<p>The <code>SwaggerSchema</code> class defines the structure of the request and response data. It is used for
	validation of input data and to format responses.<br>
	For example, you can define a Nutritionist registration schema to validate incoming data or use it to define the
	response content.</p>

<h3>SwaggerUtil:</h3>
<p>SwaggerUtil provides utility methods for creating standardized content types, such as application/json.<br>
	You can use SwaggerUtil for content-type consistency across your API.</p>

<h4>Example of Using SwaggerUtil:</h4>
<pre><code>SwaggerUtil.Response.application_json(SwaggerSchema.Nutritionist.Register.schema, SwaggerSchema.Nutritionist.Register.example)</code></pre>

<h3>HttpStatus:</h3>
<p>The <code>HttpStatus</code> enum provides HTTP status codes used throughout the API responses.<br>
	For example, <code>HttpStatus.OK</code> represents a successful response, and <code>HttpStatus.BAD_REQUEST</code>
	represents a failed request due to invalid input.</p>

<h3>Final Structure:</h3>
<p>Once you have defined all the paths, methods, request bodies, and responses, you can use the <code>.toJson()</code>
	method to generate the JSON representation of the API structure. This JSON can then be used in tools like Swagger UI
	to generate interactive API documentation.</p>

<h4>Example of Generating the API Structure:</h4>
<pre><code>SwaggerUrlTree.builder()
  .setPath('/auth')
  .addBranch(SwaggerUrlTree.builder().setPath('/admin').addLeaf(SwaggerUrlLeaf.builder().setPath('/login').addMethods(SwaggerMethod.post())))
  .addBranch(SwaggerUrlTree.builder().setPath('/nutritionist').addLeaf(SwaggerUrlLeaf.builder().setPath('/login').addMethods(SwaggerMethod.post())))
  .toJson()</code></pre>

<p>By following these steps, you can build a clean and modular API structure that is easy to maintain and document. The
	use of shared components and schemas helps to keep the documentation consistent and avoid redundancy.</p>