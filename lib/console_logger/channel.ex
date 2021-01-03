defmodule ConsoleLogger.Channel do
  use Phoenix.Channel, log_join: :info, log_handle_in: false

  require Logger

  def join("console:log", _params, socket) do
    {:ok, socket}
  end

  def handle_in("log", args, socket) do
    IO.inspect(args, label: "LOG", pretty: true)
    {:noreply, socket}
  end

  def handle_in("debug", args, socket) do
    Logger.debug(inspect(args, pretty: true))
    {:noreply, socket}
  end

  def handle_in("info", args, socket) do
    Logger.info(inspect(args, pretty: true))
    {:noreply, socket}
  end

  def handle_in("warn", args, socket) do
    Logger.warn(inspect(args, pretty: true))
    {:noreply, socket}
  end

  def handle_in("error", args, socket) do
    Logger.error(inspect(args, pretty: true))
    {:noreply, socket}
  end
end
