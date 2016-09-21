
class GAME
  attr_accessor :script
  def initialize
    @script = Hash.new
  end

  def add_chapter(chapter, title)
    @script[chapter] = {title: title, dialog: []}
  end
end

# class Dialog
# end
#
# class Line
# end
#
# class Action
# end

raw = File.read('metalgearsolid.txt')
raw = raw.split("\n")

$chapter = "******************************************************************************"
# collection = Hash.new
col = []
4.upto(raw.length) do |idx|
  current = raw[idx]
  if (current == $chapter) && (raw[idx-4] == $chapter)
    # collection[:title] = raw[idx-2].strip
    col.push(raw[idx-2].strip)
  end
end

p col
