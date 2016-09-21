
class Game
  attr_accessor :script
  def initialize
    @script = Hash.new
  end

  def new_chapter(ch, title)
    @script[ch] = { title: title, dialog: [] }
  end
end

class Dialog
end

class Line
end

class Action
end

raw = File.read('metalgearsolid.txt')
raw = raw.split("\n")

$chapter = "******************************************************************************"

game = Game.new

4.upto(raw.length) do |idx|
  current = raw[idx]
  if (current == $chapter) && (raw[idx-4] == $chapter)
    line = raw[idx-2].strip
    index = line.scan(/\d+\.\d+/).first
    title = line.sub(index, "").strip
    game.new_chapter(index, title)
  end
end

p game
p 'hello'
