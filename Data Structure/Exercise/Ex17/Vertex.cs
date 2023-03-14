using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex17
{
    class Vertex
    {
        public char key;
        public Vertex left, right;
        public Vertex(char key)
        {
            this.key = key;
            this.left = this.right = null; // initialize left and right
        }
    }

   
}
