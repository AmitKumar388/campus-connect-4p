-- Fix function search path for update_updated_at_column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Add missing RLS policies for course_assignments
CREATE POLICY "Students can view course assignments" ON public.course_assignments FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.enrollments e
    WHERE e.course_id = course_assignments.course_id 
    AND e.student_id IN (SELECT id FROM public.students WHERE user_id = auth.uid())
  ) OR public.has_role(auth.uid(), 'faculty')
);

CREATE POLICY "Faculty and admins can manage course assignments" ON public.course_assignments FOR ALL USING (
  public.has_role(auth.uid(), 'faculty') OR 
  public.has_role(auth.uid(), 'hod') OR 
  public.has_role(auth.uid(), 'admin')
);