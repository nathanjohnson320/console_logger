# ConsoleLogger

Forwards console logs to the terminal via phoenix sockets

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed
by adding `console_logger` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:console_logger, "~> 1.0.0"}
  ]
end
```

## Usage
```elixir
# user_socket.ex
channel "console:log", ConsoleLogger.Channel
```

```javascript
// package.json
"dependencies: {
  ...
  "console_logger": "file:../deps/console_logger",
  ...
}

// app.js
import Logger from 'console_logger';
Logger();
```

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at [https://hexdocs.pm/console_logger](https://hexdocs.pm/console_logger).

