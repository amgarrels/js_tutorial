def parse(input)
  output = ""
  input.split(/\n{2,}/).each do |line|
    parts = line.split(" ", 2)
    if parts[0][0] == "#" && parts[0][0].size <= 6
      output += "<h#{parts[0].length}>#{parts[1].strip}</h#{parts[0].length}>"
    else                                        
      line.gsub!("\n", "<br>")
      output += "<p>#{line.strip}</p>"
    end                                         
  end                                           
  return output                                 
end                                             
                                                
                                                
puts parse("## this is\n\na paragraph\nline break\n\n new paragraph")
