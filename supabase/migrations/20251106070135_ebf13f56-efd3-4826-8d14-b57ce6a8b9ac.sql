-- Create storage bucket for course materials
INSERT INTO storage.buckets (id, name, public)
VALUES ('course-materials', 'course-materials', true);

-- Create RLS policies for course materials bucket
CREATE POLICY "Faculty can upload materials"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'course-materials' 
  AND EXISTS (
    SELECT 1 FROM user_roles 
    WHERE user_id = auth.uid() 
    AND role IN ('faculty', 'hod', 'principal', 'admin')
  )
);

CREATE POLICY "Faculty can update their materials"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'course-materials'
  AND EXISTS (
    SELECT 1 FROM user_roles 
    WHERE user_id = auth.uid() 
    AND role IN ('faculty', 'hod', 'principal', 'admin')
  )
);

CREATE POLICY "Faculty can delete their materials"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'course-materials'
  AND EXISTS (
    SELECT 1 FROM user_roles 
    WHERE user_id = auth.uid() 
    AND role IN ('faculty', 'hod', 'principal', 'admin')
  )
);

CREATE POLICY "Everyone can view materials"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'course-materials');