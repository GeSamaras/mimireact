import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const CreatePostWizard = () => {
    // check if user is signed in
 
    
return (
    <div>
    <div className="flex p-8 w-auto">
        <Textarea placeholder="your cool message here"/> 
    </div>

    <div className="p-16">
        <form
        action={async () => {
            "use server";
            // TODO comment button calls
        }}
        > 
        <Button type="submit" variant="default">
            Comment
        </Button>
        
        </form>
    </div>
    </div>
)
}