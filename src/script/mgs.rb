require 'json'
class Dialog
  attr_accessor :content
  def initialize
    @content = Array.new
  end

  def process_lines(array)
    string = ""
    array.each do |x|
      if x == "" && string != ""
        if string.include?(" : ")
          name, line = string.split(" : ")
          @content.push({character:name.strip, line: line.strip})
        elsif !string.strip.empty?
          @content.push({character:"action", line: string.strip})
        end
        string = ""
      else
        string += " " + x.strip
      end
    end
  end
end

class Game
  attr_accessor :script
  def initialize
    @script = Array.new
    # @last = ""
  end

  def new_chapter(ch, title)
    @script.push({ title: title, dialog: [] })
    # @last = ch
  end

  def chapter_dialog(array)
    dialog = Dialog.new
    dialog.process_lines(array)
    @script.last[:dialog] = dialog.content
  end
end


raw = File.read('mgs.txt')
raw = raw.split("\n")

$chapter = "******************************************************************************"

game = Game.new
dialog = Dialog.new

bool = false;
dialog = [];

# 4.upto(raw.length) do |idx|
4.upto(raw.length) do |idx|
  current = raw[idx]
  bool = false if(current == $chapter)
  if bool
    dialog.push(current)
  end
  if (current == $chapter) && (raw[idx-4] == $chapter)
    game.chapter_dialog(dialog)
    dialog = []
    line = raw[idx-2].strip
    index = line.scan(/\d+\.\d+/).first
    title = line.sub(index, "").strip
    game.new_chapter(index, title)
    bool = true
  end
end

File.open("mgs.json", 'w'){|file| file.write(game.script.to_json)}
