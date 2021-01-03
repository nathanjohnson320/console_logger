defmodule ConsoleLoggerTest do
  use ExUnit.Case
  doctest ConsoleLogger

  test "greets the world" do
    assert ConsoleLogger.hello() == :world
  end
end
